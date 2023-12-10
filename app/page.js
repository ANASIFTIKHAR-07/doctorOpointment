import Image from 'next/image';
import Doctor from '../assets/img/p2.png';
import MaleDoc from '../assets/img/p3.jpg';
import ImageCard from '../app/components/Card';
import TeamOne from '../assets/img/t1.jpg';
import TeamTwo from '../assets/img/t2.jpg';
import TeamThree from '../assets/img/t3.jpg';

export default function Home() {
  return (
    <>
      

      <div className="container mx-auto p-4 sm:p-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
          {/* Text Section */}
          <div className="col-span-1 md:col-span-1 flex flex-col justify-center md:flex-col">
            <p className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              Welcome to Wellness Excellence: Your Path to Health and Healing Begins Here!
            </p>
            <p className="text-gray-600 mt-4 text-center md:text-left">
              Compassionate Care, Expertise You Can Trust: Discover a Healthier You with Dr. Ali.
              Your Health, Our Priority: Experience Personalized Medical Care Tailored Just for You.
              Innovative Solutions for Lasting Wellness: Join Dr. Ali on Your Journey to Better Health.
            </p>
          </div>

          <div className="col-span-1 md:col-span-1 relative mt-32 lg:mt-2">
            <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
              <Image
                src={MaleDoc}
                height={700}
                width={500}
                alt="doc"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:p-10">
          {/* Image Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="animate-fadeIn">
              <Image
                src={Doctor}
                height={700}
                width={500}
                alt="doc"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 flex flex-col justify-center md:flex-col">
            <p className="text-xl md:text-2xl font-semibold">
              Welcome to Wellness Excellence: Your Path to Health and Healing Begins Here!
            </p>
            <p className="text-gray-600 mt-4">
              Compassionate Care, Expertise You Can Trust: Discover a Healthier You with Dr. Emma.
              Your Health, Our Priority: Experience Personalized Medical Care Tailored Just for You.
              Innovative Solutions for Lasting Wellness: Join Dr. Emma on Your Journey to Better Health.
            </p>
          </div>
        </div>
      </div>


      <div className="container mt-52 lg:-mt-14 mx-auto p-4 sm:p-8">
        <div className="text-center mt-10 md:flex md:flex-col">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4">Our Team</h1>
          <div className="lg:flex space-x-4">
            <ImageCard src={TeamOne} alt="Team 1" title="Team One" />
            <ImageCard src={TeamTwo} alt="Team 2" title="Team Two" />
            <ImageCard src={TeamThree} alt="Team 3" title="Team Three" />
          </div>
        </div>
      </div>
    </>
  );
}
