### Scripts

#### Setup 
`./setupminio.sh`

Downloads MinIO server executable [minio.exe](https://dl.min.io/server/minio/release/windows-amd64/minio.exe) and the CLI client [mc.exe](https://dl.min.io/client/mc/release/windows-amd64/mc.exe) and moves both to home drive, makes `minio` dir for storage in the home drive 


`./startminio.sh`

Runs the `~/minio.exe server ~/minio --console-address :9090` command

#### How to run

 1. - Setup Minio by running `./scripts/setupminio.sh` from the root dir

 2. - Start Minio by running `./scripts/startminio.sh`

 3. - Use web browser to access 'http://localhost:9090' to access web console.
 Login `minioadmin:minioadmin`