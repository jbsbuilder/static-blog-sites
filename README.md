# Static Website Deployed on AWS

This project is a React-based static website that uses Next.js for routing and is deployed on AWS using Terraform. The website is hosted on an S3 bucket and served via CloudFront as a global content delivery network (CDN). This infrastructure is fully automated, deployed with Terraform, and managed with Jenkins.

## Table of Contents

- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [AWS Resources](#aws-resources)
- [Terraform Commands](#terraform-commands)
- [Next.js and Routing](#nextjs-and-routing)

## Project Overview

This project is designed to showcase a static website built with React and Next.js. The site is deployed on AWS using an S3 bucket to store the website files, and CloudFront is used to deliver the content globally with caching and SSL support. Terraform automates the provisioning and management of the AWS resources.

## Architecture

The deployment follows this high-level architecture:

- **S3**: Hosts the static assets (HTML, CSS, JS) of the website.
- **CloudFront**: Acts as a CDN to cache and serve content globally, with HTTPS enabled.
- **Route 53**: (Optional) For custom domain name management and routing traffic to CloudFront.
- **Terraform**: Manages the infrastructure as code (IaC) to provision and configure all necessary AWS services.

## Prerequisites

Before deploying this project, ensure you have the following installed:

- Terraform (v1.0.0 or later)
- AWS CLI (configured with proper credentials)
- Node.js and npm/yarn (for building the React app)
- Git (for version control)

## Setup Instructions

1. **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. **Install Dependencies**

   Install the required npm packages:

    ```bash
    npm install
    # Or if you're using yarn
    yarn install
    ```

3. **Build the Next.js React App**

   To generate the static build of the Next.js website:

    ```bash
    npm next build && npm next export
    ```

   This will output the static assets in the `out/` directory.

4. **Deploy with Terraform**

   Navigate to the `terraform/` directory, and run the following commands to deploy the infrastructure:

    ```bash
    terraform init
    terraform plan
    terraform apply
    ```

   This will provision the S3 bucket, CloudFront distribution, and any other required AWS resources.

5. **Upload Files to S3**

   After the infrastructure is deployed, upload the `out/` directory (containing the static website) to the S3 bucket:
    Note: If you upload the entire fold update the Root opbject path and s3_static  paths. 

## AWS Resources

- **S3 Bucket**: Hosts the static files (HTML, CSS, JS) for the React/Next.js website.
- **CloudFront**: CDN to deliver static content globally with caching, SSL termination, and domain mapping.
- **Route 53** (optional): For domain name management (if you use a custom domain).
- **Terraform**: Used to automate the creation and management of these AWS services.

## Terraform Commands

- **Initialize Terraform**

    ```bash
    terraform init
    ```

- **Plan Infrastructure Changes**

    ```bash
    terraform plan
    ```

- **Apply Infrastructure Changes**

    ```bash
    terraform apply
    ```

- **Destroy Infrastructure**

   If you need to tear down the infrastructure:

    ```bash
    terraform destroy
    ```

## Next.js and Routing

This website uses Next.js for client-side routing. Here are a few key points:

- Static Site Generation (SSG) is used to pre-render pages.
- Dynamic routing is handled by Next.js and CloudFront. All paths are routed through `index.html` using CloudFront's custom error response to handle dynamic routes (e.g., `/about`, `/blog/[id]`).