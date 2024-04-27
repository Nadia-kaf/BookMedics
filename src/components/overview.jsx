export default function Overview(){
    return(
       <section>
           <div className="max-w-4xl mx-auto p-6 bg-white shadow-md">
      <h1 className="text-2xl text-blue-800 font-semibold">About me</h1>
      <p className="mt-4">
        Hello! I'm a board-certified family physician with over 15 years of experience in providing comprehensive health care to patients of all ages. I'm dedicated to fostering long-lasting relationships with my patients and their families, helping to navigate their health journey with empathy and expertise.
      </p>

      <h2 className="mt-6 text-xl text-blue-700">Background</h2>
      <p>
        I completed my medical degree at the University of Somewhere, followed by a residency in Family Medicine at City Hospital. My commitment to ongoing education has led me to attain additional certifications in Pediatric and Geriatric Care, ensuring a well-rounded approach to health care within the family unit.
      </p>

      <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
        <h2 className="text-lg font-bold">Credentials</h2>
        <ul className="list-disc pl-5">
          <li>MD from University of Somewhere</li>
          <li>Board Certified in Family Medicine</li>
          <li>Certifications in Pediatric and Geriatric Care</li>
        </ul>
      </div>

      <h2 className="mt-6 text-xl text-blue-700">Philosophy of Care</h2>
      <p>
        My philosophy of care centers around a patient-first approach. I believe in listening intently to each patient's concerns and building a personalized care plan that respects their individual needs and lifestyle. I am a strong advocate for preventive care, education, and empowering patients with the knowledge to make informed health decisions.
      </p>

      <h2 className="mt-6 text-xl text-blue-700">Personal Interests</h2>
      <p>
        In addition to my clinical practice, I enjoy hiking, practicing yoga, and spending time with my family and our dog, Rocky. I believe in the balance of mind and body and try to incorporate this balance into both my personal life and clinical practice.
      </p>

      <div className="mt-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
        <h2 className="text-lg font-bold">Community Involvement</h2>
        <p>
          I am actively involved in our local community, participating in health fairs, free clinics, and educational workshops. I also contribute to a monthly column in our local health magazine, sharing tips on maintaining a healthy lifestyle.
        </p>
      </div>
    </div>

       </section>
    )
}