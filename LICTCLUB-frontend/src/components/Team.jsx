import { motion } from 'framer-motion';

const team = [
  { name: 'Ashok Bhattrai', role: 'Event Organizer', image: './ashok.JPG', desc : 'He leads the planning and execution of large-scale events, overseeing all aspects from concept development to final delivery, while managing teams and budgets to ensure success.' },
  { name: 'Aayush Ghimire', role: 'Event Coordinator', image: './ayush.jpeg', desc : 'He planned and organized event and vendor communications ensuring smooth execution to deliver successful experiences.' },
  { name: 'Narendra Ale Magar', role: 'Director', image: './naren.jpeg', desc : 'He manages the key decisions and ensures smooth coordinations across all and ensures high impact, seamless experience for all participants.' },
  { name: 'Mod Nath Acharya', role: 'Advisor and Supervisior', image: './modacharya.jpeg', desc : 'As Advisor and Supervisor, he guides and overseas the event, providing strategic insight and ensuring smooth execution.' },
  { name: 'Rupak Lamichhane', role: 'Design and Branding Lead', image: './rupak.jpeg', desc : 'As a Design and Branding Lead, He leads the hackathon’s visual identity, creating all graphics to make the event stand out.' },
  { name: 'Nabin Dhakal', role: 'Technical Coordinator', image: './hero.jpeg', desc : 'He manages and streamlines technical operations, coordinates between teams to ensure timely project delivery, and provides technical support to resolve issues efficiently.' },
  { name: 'Pratik Tiwari', role: 'Tech Operations Associate', image: './pratik.jpeg', desc : 'He ensures the technical side of hackathon runs smoothly , managing setups, and support teams with reliable system from start to finish.' },
  { name: 'Shristi Acharya', role: 'Event Anchor and Evaluation Lead', image: './shristi1.jpeg', desc : 'With dynamic presence she creates a lively and motivating atmosphere throughout the hackathon. She upholds the event’s professionalism and spirit by orchestrating flawless coordination and inspiring engagement.' },
  { name: 'Ujjwal Rijal', role: 'Marketing Communications Lead', image: './ujjwal.jpeg', desc : 'He handles all event communications and promotions, ensuring the message reaches and engages the right audience.' },
  { name: 'Dipjung Karki', role: 'Sponsorship Coordinator', image: './dipjung.jpeg', desc : 'He identifies and secures sponsorship opportunities, built strong relationships with partners, and manages sponsor communications to maximize support and engagement.' },
];

export default function Team() {
  return (
    <motion.section
      id="team"
      className=" scroll-mt-20  py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-center mb-5">Meet the Team</h2>
      <p className='text-m text-center font-light mt-[-10px] mb-5'>The passionate individuals behind the LICT Hackathon, working to create a unforgettable experience</p>
      <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {team.map(member => (
          <div key={member.name} className="bg-white p-4 rounded shadow text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-50 h-50 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className=''>{member.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
