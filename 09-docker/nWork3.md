1-  docker pull node:15.14
        15.14: Pulling from library/node
        bfde2ec33fbc: Pull complete
        787f5e2f1047: Pull complete
        7b6173a10eb8: Pull complete
        dc05be471d51: Pull complete
        55fab5cadd3c: Pull complete
        bd821d20ef8c: Pull complete
        6041b69671c6: Pull complete
        989c5d2d2313: Pull complete
        4b57d41e8391: Pull complete
        Digest: sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
        Status: Downloaded newer image for node:15.14
        docker.io/library/node:15.14


2-  docker run -d -it --name first_node  -v d:\UchebaWWW\Netology\Git\N_ndse6-hWorks\09-docker\data:/var/first/data node:15.14
        cd6442e754d56cd9121fd72ebda5f69e15c774a6527144cb6b9de6a3e2f2398e

    docker ps -a
        CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS          PORTS     NAMES
        cd6442e754d5   node:15.14   "docker-entrypoint.s…"   23 seconds ago   Up 22 seconds             first_node

3-  docker run -d -it --name second_node -v d:\UchebaWWW\Netology\Git\N_ndse6-hWorks\09-docker\data:/var/second/data node:15.14
        e08946ae9ff906c122ab2eb171c2cf203f73838df1b7f2e68f020186fffaf435

    docker ps -a
        CONTAINER ID   IMAGE        COMMAND                  CREATED         STATUS         PORTS     NAMES
        e08946ae9ff9   node:15.14   "docker-entrypoint.s…"   3 seconds ago   Up 2 seconds             second_node
        cd6442e754d5   node:15.14   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes             first_node

4-  docker exec -d first_node touch /var/first/data/test1.txt

5-  docker exec -it second_node ls /var/second/data
    test1.txt  test2.txt

6-  docker stop first_node
        first_node

    docker stop second_node
        second_node

7-  docker ps -a
        CONTAINER ID   IMAGE        COMMAND                  CREATED          STATUS                            PORTS     NAMES
        e08946ae9ff9   node:15.14   "docker-entrypoint.s…"   11 minutes ago   Exited (137) About a minute ago             second_node
        cd6442e754d5   node:15.14   "docker-entrypoint.s…"   13 minutes ago   Exited (137) About a minute ago             first_node


8-  docker container prune
        WARNING! This will remove all stopped containers.
        Are you sure you want to continue? [y/N] y
        Deleted Containers:
        e08946ae9ff906c122ab2eb171c2cf203f73838df1b7f2e68f020186fffaf435
        cd6442e754d56cd9121fd72ebda5f69e15c774a6527144cb6b9de6a3e2f2398e

        Total reclaimed space: 58B

    docker ps -a
        CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

9-  docker rmi node:15.14
        Untagged: node:15.14
        Untagged: node@sha256:608bba799613b1ebf754034ae008849ba51e88b23271412427b76d60ae0d0627
        Deleted: sha256:3d3f41722daf1a77c34d6eade6676bbffa2d6a2a21095de2ab0c427a5c942fc9
        Deleted: sha256:601382991a159cfc5013ad973158f30b7b7a913e8d7e547b3456deab3ad98022
        Deleted: sha256:d5db49eecae8c02c9ea3a79f89c43ded9162bac118a0302a7b514d0df82aa112
        Deleted: sha256:a2c1973858d0aad3de0927294602b17c8ef9050c30e0f461e0868997a08552a4
        Deleted: sha256:a0153172017a08a521a8be971ca4dcb5fbc4b7227642c12bbb2da6265bd66b50
        Deleted: sha256:f1123940e954d335d91b52a40fab4f8144f38ff113ade7d65663071d0f06da6f
        Deleted: sha256:f1f4fbb0e7e6e0ce2d9eae1e577f9f6df0a719dd874bff00b2d08895c75c297d
        Deleted: sha256:1eb455ab6d45fdbbd90fccff791ffa228080c052acf464f8da1b1d78650bd706
        Deleted: sha256:1dbe832a694971a925d7d216f49b700c95f402bd72288f9d37eceb1d59dcf72d
        Deleted: sha256:2f4ee6a2e1b5dfb9236cd262e788f9d39109242ca27a4aacb583c8af66ec3ff7
                
