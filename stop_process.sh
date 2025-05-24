sudo kill -9 $(sudo ss -lptn 'sport = :5446' | awk -F'pid=' '/LISTEN/ {split($2,a,","); print a[1]}')
sudo docker-compose down