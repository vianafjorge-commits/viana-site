# Docker Integration Guide

This project includes Docker support for containerized deployment and n8n for workflow automation.

## Files

- **Dockerfile**: Multi-stage build configuration for optimized production images
- **.dockerignore**: Files and directories to exclude from Docker context
- **docker-compose.yml**: Local development environment configuration
- **.github/workflows/docker-build.yml**: GitHub Actions workflow for automatic image building and pushing

## Local Development with Docker

### Build the image
```bash
docker build -t viana-site:latest .
```

### Run with Docker Compose
```bash
docker-compose up
```

The application will be available at:
- **App**: `http://localhost:3000`
- **n8n**: `http://localhost:5678`

### Run standalone
```bash
docker run -p 3000:3000 viana-site:latest
```

## GitHub Actions Workflow

The workflow automatically:
- **Builds** Docker images on push to `main` and `develop` branches
- **Pushes** images to GitHub Container Registry (ghcr.io)
- **Tags** images with branch names, semantic versions, and commit SHA
- **Caches** layers for faster subsequent builds

### Image naming
Images are pushed to: `ghcr.io/<github-username>/viana-site:<tag>`

### Supported triggers
- Push to main/develop branches
- Semantic version tags (v1.0.0)
- Pull requests (builds only, no push)

## Environment Variables

For production deployments, consider setting:
- `NODE_ENV=production` (default in container)

## Security Notes

- Image runs as non-root user (`nextjs:1001`)
- Uses Alpine Linux for smaller image size
- Multi-stage build reduces final image size
- Health checks included in docker-compose

## Building and Pushing to ghcr.io

To manually push images:

```bash
# Build image
docker build -t ghcr.io/$GITHUB_REPO_OWNER/viana-site:latest .

# Push to registry (requires authentication)
docker push ghcr.io/$GITHUB_REPO_OWNER/viana-site:latest
```

First authenticate with:
```bash
echo $CR_PAT | docker login ghcr.io -u $GITHUB_ACTOR --password-stdin
```
