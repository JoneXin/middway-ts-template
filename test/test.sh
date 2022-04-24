# 1, 压缩
tar -czf current.tar.zip ./文件名
# 2, 传输
scp current.zip root@101.43.105.27:/root/
# 3, ssh
ssh root@101.43.105.27
# 4, 解压
cd /root
tar -xvzf current.tar.zip
rm -rf current.zip
# 5, 打包镜像
cd 应用名
docker image build -t 应用名:版本 .
# 6，停止原来的服务 并 删除原有镜像
# 6-1 通过容器名查询并关闭容器
docker stop `docker ps -a | grep 应用名 | awk '{print $1}'`
docker rm `docker ps -a | grep 应用名 | awk '{print $1}'`
# 6-2 通过镜像名查询并关闭
dokcer stop `docker ps -a | grep 镜像名:版本 | awk '{print $1}'`
dokcer rm `docker ps -a | grep 镜像名:版本 | awk '{print $1}'`
# 6-3 根据镜像名查询镜像ID并删除镜像
docker image rm `docker images -q --filter reference=镜像名:版本`
# 7，运行新的镜像
docker container run -d -p端口:端口 --name 容器名 镜像名:版本

