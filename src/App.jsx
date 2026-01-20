import Navigationbar from './Navigationbar.jsx';
import styles from './App.module.css';
import SkillBar from './SkillBar.jsx';
import TestimonialCard from './Testimonial.jsx';
import CertificateCarousel from './certificateCarousel.jsx';


function App() {
  return (
    <div className="siteBackGround"> 
       
          <Navigationbar />
        <div className={styles.section}>
          <div className={styles.column1}>
              <h1>Hello, I am Michael!</h1>
              <h2 style={{color: '#ffffff', fontSize: '1.2em', fontWeight: 'normal', marginBottom: '30px', marginTop: '10px'}}>Aspiring Frontend Software Engineer | Creative UX/UI Designer.</h2>
            <div style={{display: 'flex', gap: '30px'}}>  
            <button onClick={() => window.location.href = "https://github.com/Keepgoing-30"}>View GitHub </button>
            <button onClick={() => window.location.href = "mailto:lovethebookofmormon@gmail.com"}>
  Contact Me
</button>
            </div>
        
          </div>
          <div className={styles.column2}>
              <img 
  src={`${import.meta.env.BASE_URL}quoc_profile.png`} 
  alt="profile photo" 
  style={{
    width: '90%', 
    height: 'auto', 
    borderRadius: '10px', 
    marginBottom: '10px', 
    marginTop: '20px', 
    WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
    maskImage: 'radial-gradient(circle, black 0%, transparent 100%)'
  }} 
/>
              <p style={{fontFamily: 'Arial, sans-serif', fontSize: '0.95em', color: '#ffffff'}}><i>"Every effort today is a foundation for a stronger <br/>version of me tomorrow."</i></p>
          </div>
        </div>
         <div className={styles.section} style={{flexDirection: 'column', alignItems: 'center', padding: '5px'}}>
          <h1 style={{color: '#ffffff', fontWeight: 'bold'}}>Skills</h1>
          <p style={{color: '#ffffff', fontSize: '1.2em', fontWeight: 'normal', marginBottom: '2px', marginTop: '-10px'}}>Through various hands-on projects, I have developed a solid foundation in the following technologies to drive future success:</p>
        </div>
        <div className={styles.section} style={{flexDirection: 'column', alignItems: 'center', padding: '50px 0', border: '#2f7cd8 solid 1px'}}>          
          
         
                  <div className={styles.skillbox1}>
                    
                        
                              {/* Thanh màu xanh lá truyền thống */}
                              <SkillBar name="Python" level="Intermediate" barColor="#B33232" />
                   
                              {/* Thanh màu vàng cho Javascript */}
                              <SkillBar name="Javascript" level="Advanced" barColor="#4f9b1c" />
    
                              {/* Thanh màu tím cho Java */}
                              <SkillBar name="Java" level="Intermediate" barColor="#b66004" />

                              {/* Thanh màu xanh biển cho React */}
                              <SkillBar name="React" level="Advanced" barColor="#818804" />


                  </div>
                  <div className={styles.skillbox1}>
                        
                              {/* Thanh màu xanh lá truyền thống */}
                              <SkillBar name="CSS" level="Advanced" barColor="#1A477B" />

                              {/* Thanh màu vàng cho Node.js */}
                              <SkillBar name="Node.js" level="Advanced" barColor="#6c31af" />

                              {/* Thanh màu tím cho HTML */}
                              <SkillBar name="HTML" level="Advanced" barColor="#0597b1" />

                              {/* Thanh màu xanh biển cho Agile */}
                              <SkillBar name="Agile" level="Advanced" barColor="#6e929b" />

                            
                  </div>

                   <div className={styles.skillbox1}>
                        
                              {/* Thanh màu xanh lá truyền thống */}
                              <SkillBar name="SQL" level="Basic" barColor="#335348" />

                              {/* Thanh màu vàng cho Node.js */}
                              <SkillBar name="Tailwind CSS" level="Advanced" barColor="#5d8145" />

                              {/* Thanh màu tím cho HTML */}
                              <SkillBar name="C++" level="Basic" barColor="#df06f3b0" />


                  </div>

                  <button style={{marginTop: '25px'}}>View Resume</button>
                  
        </div>
        <div className={styles.section} style={{flexDirection: 'column', alignItems: 'center', padding: '5px'}}>
          <h1 style={{color: '#ffffff', fontWeight: 'bold'}}>Testimonials</h1>
          <p style={{color: '#ffffff', fontSize: '1.2em', fontWeight: 'normal', marginBottom: '2px', marginTop: '-10px'}}>Hear what others have to say about my work ethic and skills:</p>
        </div>
        <div className={styles.section}>
          <div className={styles.column4}>
              <TestimonialCard 
            name="Spencer Ingley"
            title="Associate Professor of Biology BYU - Hawaii"
            date="Jan 2025"
            comment="This guy is a great developer! His CSS skills are top-notch. Besides that, he is a team player and always willing to help others."
            imageUrl="/public/ingley.jpg"
            linkedinUrl="https://www.linkedin.com/in/spencer-ingley-28394954/"
          />
          </div>
          <div className={styles.column5}>
              <TestimonialCard 
            name="Lewis Hassell"
            title="Professor of Pathology at University of Oklahoma Health Sciences Center"
            date="Jan 2026"
            comment="In working with Micheal when he was a volunteer in Vietnam, I found him to be a very dedicated hard worker. He managed complex issues with many types of people quite well and yet also remained focused on his core purposes. He is very even tempered and was never frustrated, despite some very challenging co-workers."
            imageUrl="/public/hussel.jpg"
            linkedinUrl="https://www.linkedin.com/in/lewis-hassell-6898966/"
          />
          </div>
          <div className={styles.column6}>
               <TestimonialCard 
            name="Julius Such"
            title="The former supervisor at the Polynesian Cultural Center-Hawaii"
            date="Jan 2026"
            comment="I am Julius Such, former supervisor of Michael Bui at the Polynesian Cultural Center on the Smoothie Team. During a challenging period when the position had high turnover, Michael consistently stepped up, improved our work processes, and helped make the team more efficient. He was also a great teammate who contributed to a positive work environment."
            imageUrl="/public/julius.jpeg"
            linkedinUrl="https://www.linkedin.com/in/julius-such-060a091b5/"
          />
          </div>
         
        </div>
         <div className={styles.section} style={{flexDirection: 'column', alignItems: 'center', padding: '5px'}}>
          <h1 style={{color: '#ffffff', fontWeight: 'bold'}}>Certificates</h1>
          <p style={{color: '#ffffff', fontSize: '1.2em', fontWeight: 'normal', marginBottom: '50px', marginTop: '-10px'}}>Technical certifications and credentials that fuel my growth as a Software Engineer:</p>
        </div>
                <section className={styles.carouselSection}>
                  <CertificateCarousel />
                </section>
        <div className={styles.section} style={{flexDirection: 'column', alignItems: 'center', padding: '20px'}}>
          <h2 style={{color: '#ffffff', fontSize: '1em', fontWeight: 'normal', marginBottom: '10px', marginTop: '10px'}}>© 2026 Michael Bui. All rights reserved.</h2>
        </div>
    </div>
    
  )
}
     
 
 


export default App
