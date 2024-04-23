import React from 'react';
import Header from './../shared/Header/Header';
import Navbar from './../shared/Navbar/Navbar';
import earthquake from '../assets/earthquake.jpg';
import sports from '../assets/sports.jpg';
import tech from '../assets/tech.jpeg';

const About = () => {
    const newsArticles = [
        {
          id: 1,
          title: 'Breaking News: Earthquake Hits City',
          description: 'A 5.8 magnitude earthquake struck the city early this morning...',
          imageUrl: earthquake,
          date: 'April 23, 2024'
        },
        {
          id: 2,
          title: 'New Technology Unveiled at Tech Conference',
          description: 'The latest technology innovations were showcased at the annual tech conference...',
          imageUrl: sports,
          date: 'April 22, 2024'
        },
        {
          id: 3,
          title: 'Sports Update: Local Team Wins Championship',
          description: 'The local sports team clinched the championship title in a thrilling match...',
          imageUrl: tech,
          date: 'April 21, 2024'
        }
      ];
    return (
        <>
        <Header />
        <Navbar />
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map(article => (
                    <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img 
                            src={article.imageUrl} 
                            alt={article.title} 
                            className="w-full h-48 object-cover" 
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{article.description}</p>
                            <p className="text-gray-500 text-xs">{article.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default About;
