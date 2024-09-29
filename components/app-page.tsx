'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Page() {
  const projects = [
    {
      title: "Jenkins Server",
      description: "This project automates the deployment of a Jenkins server using Terraform, enabling efficient and repeatable provisioning of infrastructure on a cloud platform. By defining the infrastructure as code, the project ensures scalable, version-controlled, and easily replicable Jenkins server setups for CI/CD pipelines.",
      image: "/images/jenkins-svgrepo-com.svg",
      link: "https://jenkins.cloudsmithlabs.com"
    },
    {
      title: "Cloud Resume Challenge",
      description: "This project involves completing the Cloud Resume Challenge, where a personal resume website is deployed using AWS services like S3, CloudFront, and Lambda, while integrating infrastructure as code with Terraform. The challenge demonstrates cloud skills in web hosting, serverless architecture, and CI/CD automation.",
      image: "/images/terraform-svgrepo-com.svg",
      link: "https://cloudresumechallenge.cloudsmithlabs.com"
    },
    {
      title: "This Portfolio",
      description: "Deploying a React Next.js application as a static website, this project leverages Terraform to automate infrastructure provisioning on a cloud platform. By combining Next.js static generation with Terraform’s infrastructure-as-code, it ensures efficient, scalable, and repeatable hosting deployments.",
      image: "/images/cloud-sun-svgrepo-com.svg",
      link: "https://cloudsmithlabs.com"
    },

  ]

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/endless-constellation.svg')"}}>
      <div className="min-h-screen bg-black bg-opacity-20 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Cloud Smith Labs</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600} 
                  height={400} 
                  className="w-full object-cover h-55"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}