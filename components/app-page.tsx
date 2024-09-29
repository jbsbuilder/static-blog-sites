'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Page() {
  const projects = [
    {
      title: "Jenkins Server",
      description: "This is a description of project 1. It was built using React and Next.js.",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://jenkins.cloudsmithlabs.com"
    },
    {
      title: "Cloud Resume Challenge",
      description: "Project 2 was an exciting challenge that involved building a full-stack application.",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://cloudresumechallenge.cloudsmithlabs.com"
    },
    {
      title: "This Portfolio",
      description: "For project 3, I created a mobile app using React Native and Firebase.",
      image: "/placeholder.svg?height=200&width=300",
      link: "https://cloudsmithlabs.com"
    }
  ]

  return (
    <main className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="min-h-screen bg-black bg-opacity-70 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-12">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={300} 
                  height={200} 
                  className="w-full object-cover h-48"
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