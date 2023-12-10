import React from 'react';
import Image from 'next/image';
import DocImg from '../../assets/img/DoctorAboutUs.png';
import ImageCard from '../components/Card';
import TeamOne from '../../assets/img/t1.jpg';
import TeamTwo from '../../assets/img/t2.jpg';
import TeamThree from '../../assets/img/t3.jpg';

const AboutUsPage = () => {
  return (
    <div className="container mx-auto p-8">
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600">
          At Wellness Excellence, our team of dedicated healthcare professionals is committed to providing
          compassionate and personalized care to enhance your well-being. Meet the individuals who are
          passionate about your health and healing journey.
        </p>
      </section>

      {/* Doctor Section */}
      <section className="flex flex-col md:flex-row items-center justify-center mb-12">
        <div className="md:w-1/2 pr-8 mb-4 md:mb-0">
          <Image src={DocImg} alt="Doctor" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dr. Evans Johnson</h2>
          <p className="text-gray-600">
            Dr. Emma Johnson is a board-certified physician with a focus on holistic and patient-centered care.
            With years of experience, Dr. Johnson is dedicated to providing innovative solutions for lasting wellness.
            Your health is her priority, and she looks forward to guiding you on your journey to better health.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center mb-12">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4">Our Team</h1>
        <div className="lg:flex justify-center space-x-4">
          <ImageCard src={TeamOne} alt="Team 1" title="Team One" />
          <ImageCard src={TeamTwo} alt="Team 2" title="Team Two" />
          <ImageCard src={TeamThree} alt="Team 3" title="Team Three" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Wellness Excellence, our mission is to provide high-quality, patient-centered healthcare services
          with a focus on preventive care and holistic well-being. We are dedicated to fostering a caring and
          supportive environment for our patients, empowering them on their journey to optimal health.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Compassion: We treat each patient with empathy and understanding.</li>
          <li>Excellence: We strive for excellence in all aspects of healthcare delivery.</li>
          <li>Collaboration: We work collaboratively with our patients to achieve optimal health.</li>
          <li>Innovation: We embrace innovative and evidence-based solutions for lasting wellness.</li>
        </ul>
      </section>

      {/* Animations */}
      <section className="text-center">
        <p className="text-gray-600 animate-bounce">We are here to support your health journey!</p>
        {/* Add other animations as needed */}
      </section>
    </div>
  );
};

export default AboutUsPage;