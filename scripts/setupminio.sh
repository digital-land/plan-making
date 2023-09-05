curl -o ~/minio.exe https://dl.min.io/server/minio/release/windows-amd64/minio.exe
curl -o ~/mc.exe https://dl.min.io/client/mc/release/windows-amd64/mc.exe 
echo "Minio downloaded" 

~/mc.exe alias set local http://127.0.0.1:9000 minioadmin minioadmin

mkdir -p ~/minio

~/mc.exe mb local/dluhc-poc
~/mc.exe admin user add local testaccesskey testsecretkey
~/mc.exe admin policy attach local readwrite --user testaccesskey

