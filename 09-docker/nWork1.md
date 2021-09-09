1-  docker pull busybox
        Using default tag: latest
        latest: Pulling from library/busybox
        8ec32b265e94: Pull complete
        Digest: sha256:b37dd066f59a4961024cf4bed74cae5e68ac26b48807292bd12198afa3ecb778
        Status: Downloaded newer image for busybox:latest
        docker.io/library/busybox:latest

    docker images
        REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
        busybox      latest    42b97d3c2ae9   2 weeks ago   1.24MB

2-  docker run -i -t --name pinger busybox ping -c 7 netology.ru
        PING netology.ru (104.22.48.171): 56 data bytes
        64 bytes from 104.22.48.171: seq=0 ttl=37 time=4.875 ms
        64 bytes from 104.22.48.171: seq=1 ttl=37 time=5.794 ms
        64 bytes from 104.22.48.171: seq=2 ttl=37 time=5.860 ms
        64 bytes from 104.22.48.171: seq=3 ttl=37 time=6.303 ms
        64 bytes from 104.22.48.171: seq=4 ttl=37 time=5.835 ms
        64 bytes from 104.22.48.171: seq=5 ttl=37 time=6.111 ms
        64 bytes from 104.22.48.171: seq=6 ttl=37 time=5.741 ms

        --- netology.ru ping statistics ---
        7 packets transmitted, 7 packets received, 0% packet loss
        round-trip min/avg/max = 4.875/5.788/6.303 ms

3-  docker ps -a
        CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                     PORTS     NAMES
        03e95d18815c   busybox   "ping -c 7 netology.…"   11 seconds ago   Exited (0) 4 seconds ago             pinger

4-  docker logs pinger
        PING netology.ru (104.22.48.171): 56 data bytes
        64 bytes from 104.22.48.171: seq=0 ttl=37 time=4.875 ms
        64 bytes from 104.22.48.171: seq=1 ttl=37 time=5.794 ms
        64 bytes from 104.22.48.171: seq=2 ttl=37 time=5.860 ms
        64 bytes from 104.22.48.171: seq=3 ttl=37 time=6.303 ms
        64 bytes from 104.22.48.171: seq=4 ttl=37 time=5.835 ms
        64 bytes from 104.22.48.171: seq=5 ttl=37 time=6.111 ms
        64 bytes from 104.22.48.171: seq=6 ttl=37 time=5.741 ms

        --- netology.ru ping statistics ---
        7 packets transmitted, 7 packets received, 0% packet loss
        round-trip min/avg/max = 4.875/5.788/6.303 ms
        
5-  docker start pinger
        pinger

    docker ps -a
        CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                     PORTS     NAMES
        f7546ab74951   busybox   "ping -c 7 netology.…"   3 minutes ago   Exited (0) 7 seconds ago             pinger
        03e95d18815c   busybox   "ping -c 7 netology.…"   4 minutes ago   Exited (0) 4 minutes ago             competent_brattain   

6-  docker logs pinger
        PING netology.ru (104.22.48.171): 56 data bytes
        64 bytes from 104.22.48.171: seq=0 ttl=37 time=4.875 ms
        64 bytes from 104.22.48.171: seq=1 ttl=37 time=5.794 ms
        64 bytes from 104.22.48.171: seq=2 ttl=37 time=5.860 ms
        64 bytes from 104.22.48.171: seq=3 ttl=37 time=6.303 ms
        64 bytes from 104.22.48.171: seq=4 ttl=37 time=5.835 ms
        64 bytes from 104.22.48.171: seq=5 ttl=37 time=6.111 ms
        64 bytes from 104.22.48.171: seq=6 ttl=37 time=5.741 ms

        --- netology.ru ping statistics ---
        7 packets transmitted, 7 packets received, 0% packet loss
        round-trip min/avg/max = 4.875/5.788/6.303 ms
        PING netology.ru (104.22.49.171): 56 data bytes
        64 bytes from 104.22.49.171: seq=0 ttl=37 time=5.671 ms
        64 bytes from 104.22.49.171: seq=1 ttl=37 time=6.304 ms
        64 bytes from 104.22.49.171: seq=2 ttl=37 time=6.272 ms
        64 bytes from 104.22.49.171: seq=3 ttl=37 time=6.441 ms
        64 bytes from 104.22.49.171: seq=4 ttl=37 time=6.863 ms
        64 bytes from 104.22.49.171: seq=5 ttl=37 time=6.325 ms
        64 bytes from 104.22.49.171: seq=6 ttl=37 time=6.474 ms

        --- netology.ru ping statistics ---
        7 packets transmitted, 7 packets received, 0% packet loss
        round-trip min/avg/max = 5.671/6.335/6.863 ms
             
7- запущен конейнер pinger 2 раза , пингов отправлено 14

8- docker container prune
        WARNING! This will remove all stopped containers.
        Are you sure you want to continue? [y/N] y
        Deleted Containers:
        f7546ab74951b2fd09b3dfc17a3474f53859fa475b774e1b417753ff2e1f6b9c
        03e95d18815c64449e972900736e571aff0e8db90f5d9030dc9aed0876b038c4

        Total reclaimed space: 0B

9-  docker rmi busybox
        Untagged: busybox:latest
        Untagged: busybox@sha256:b37dd066f59a4961024cf4bed74cae5e68ac26b48807292bd12198afa3ecb778
        Deleted: sha256:42b97d3c2ae95232263a04324aaf656dc80e7792dee6629a9eff276cdfb806c0
        Deleted: sha256:0fd05bf2930d72edc1aa0b9fa7e442295c2384512a32c0b1502392f5384acd81

        
