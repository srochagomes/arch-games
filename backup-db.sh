#!/bin/bash

# Database backup and restore script for Docker PostgreSQL containers

# Check if container ID is provided
if [ -z "$1" ]; then
    echo "Error: Container ID is required"
    echo "Usage: ./backup-db.sh <container_id> [backup|restore <backup_file>]"
    exit 1
fi

CONTAINER_ID=$1
shift  # Remove container ID from arguments

      
# Configuration - Update these variables with your database details
DB_NAME="n8n"
DB_USER="n8n_user"
BACKUP_DIR="./backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Verify if container is running
if ! docker ps | grep -q "$CONTAINER_ID"; then
    echo "Error: Container $CONTAINER_ID is not running"
    exit 1
fi

# Backup
if [ "$1" = "backup" ]; then
    echo "Creating database backup from container $CONTAINER_ID..."
    docker exec "$CONTAINER_ID" pg_dump -U "$DB_USER" -d "$DB_NAME" -F c > "$BACKUP_DIR/backup_${TIMESTAMP}.dump"
    echo "Backup created at: $BACKUP_DIR/backup_${TIMESTAMP}.dump"
    exit 0
fi

# Restore
if [ "$1" = "restore" ]; then
    if [ -z "$2" ]; then
        echo "Error: Please provide the backup file name"
        echo "Usage: ./backup-db.sh <container_id> restore <backup_file>"
        exit 1
    fi

    BACKUP_FILE="$2"

    if [ ! -f "$BACKUP_FILE" ]; then
        echo "Error: Backup file $BACKUP_FILE does not exist"
        exit 1
    fi

    echo "Restoring database in container $CONTAINER_ID from backup..."
    cat "$BACKUP_FILE" | docker exec -i "$CONTAINER_ID" pg_restore -U "$DB_USER" -d "$DB_NAME" -c
    echo "Database restored successfully"
    exit 0
fi

# If no valid command is provided
echo "Usage:"
echo "  To create a backup: ./backup-db.sh <container_id> backup"
echo "  To restore from backup: ./backup-db.sh <container_id> restore <backup_file>"
echo ""
echo "Example:"
echo "  ./backup-db.sh abc123def456 backup"
echo "  ./backup-db.sh abc123def456 restore ./backups/backup_20240315_123456.dump"
exit 1
