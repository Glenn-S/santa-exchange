DOCKER_CONTAINER_LIST := $(shell docker ps -aq)
REPO_NAME = "skeltong2"
IMAGE_NAME = "secret-santa-webapp"
TAG = "1.0.2"

build-image:
	docker build -t $(REPO_NAME)/$(IMAGE_NAME):$(TAG) .

push-image:
	docker push $(REPO_NAME)/$(IMAGE_NAME):$(TAG)

up: 
	docker-compose up -d

down:
	docker-compose down

nuke:
	docker rm -f $(DOCKER_CONTAINER_LIST)