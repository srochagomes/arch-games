#!/bin/bash

# Database backup and restore script for Docker PostgreSQL containers
# This script provides commands to backup and restore your PostgreSQL database from a Docker container

# Check if container ID is provided
if [ -z "$1" ]; then
    echo "Error: Container ID is required"
    echo "Usage: ./backup-db.sh <container_id> [backup|restore <backup_file>]"
    exit 1
fi

CONTAINER_ID=$1
shift  # Remove container ID from arguments

# Configuration - Update these variables with your database details
DB_NAME="your_database_name"
DB_USER="your_database_user"
BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Verify if container exists and is running
if ! docker ps | grep -q $CONTAINER_ID; then
    echo "Error: Container $CONTAINER_ID is not running"
    exit 1
fi

# Command to create a backup
# Usage: ./backup-db.sh <container_id> backup
if [ "$1" = "backup" ]; then
    echo "Creating database backup from container $CONTAINER_ID..."
    docker exec $CONTAINER_ID pg_dump -U $DB_USER -d $DB_NAME -F c > "$BACKUP_DIR/backup_$TIMESTAMP.dump"
    echo "Backup created at: $BACKUP_DIR/backup_$TIMESTAMP.dump"
fi

# Command to restore from backup
# Usage: ./backup-db.sh <container_id> restore <backup_file>
if [ "$1" = "restore" ]; then
    if [ -z "$2" ]; then
        echo "Error: Please provide the backup file name"
        echo "Usage: ./backup-db.sh <container_id> restore <backup_file>"
        exit 1
    fi
    
    if [ ! -f "$2" ]; then
        echo "Error: Backup file $2 does not exist"
        exit 1
    }
    
    echo "Restoring database in container $CONTAINER_ID from backup..."
    cat "$2" | docker exec -i $CONTAINER_ID pg_restore -U $DB_USER -d $DB_NAME -c
    echo "Database restored successfully"
fi

# Show usage instructions if no backup/restore command provided
if [ -z "$1" ]; then
    echo "Usage:"
    echo "  To create a backup: ./backup-db.sh <container_id> backup"
    echo "  To restore from backup: ./backup-db.sh <container_id> restore <backup_file>"
    echo ""
    echo "Example:"
    echo "  ./backup-db.sh abc123def456 backup"
    echo "  ./backup-db.sh abc123def456 restore ./backups/backup_20240315_123456.dump"
fi 