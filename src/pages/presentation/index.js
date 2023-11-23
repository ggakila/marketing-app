import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import Card from "@/components/presentation/Card"
import Pentagon from "@/components/presentation/Pentagon"
import Press from "@/components/presentation/Press"

const data = {
  tagline: "Step Into Your Style, Define Your Stride",
  description: 'Our campaign revolves around empowering men to express their unique style through our sneakers while embracing their individuality with confidence. "Step Into Your Style, Define Your Stride" encapsulates the idea that our sneakers are not just footwear but a statement of personal expression, comfort, and quality.',
  items: [
      {
          id: 1,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 2,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 3,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 4,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 5,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 6,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 7,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 8,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 9,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
      {
          id: 10,
          title: "Market Research and Persona Development",
          description: "Understand your target audience by conducting in-depth market research. Identify the demographics, interests, and preferences of your potential customers. Create detailed buyer personas to guide your campaign."
      },
  ]
}


const Presentation = () => {

  const [templateIndex, setTemplateIndex] = useState(0)
  const pdfRef = useRef()

  const newTemplate = () => {
    setTemplateIndex(Math.floor(Math.random() * 5))
  }

  const downloadPdf = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4', true )
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save('marketing.pdf')
    })
  }

  let content;

  if(templateIndex === 0 ) {
    content = (
      <div>
          <div ref={pdfRef} className='flex flex-col items-center h-full text-gray-900 bg-white'>
          <header className='text-center my-6 mx-4 relative z-10'>
            <h1 className='font-bold text-2xl m-4'>{data.tagline}</h1>
            <p className='text-slate-700 font-medium text-xl m-4'>{data.description}</p>
          </header>
          <ol className={`relative z-20 p-10 grid gap-14 justify-items-center m lg:grid-cols-4 lg:gap-y-14 w-full`}>
          {data.items.map((item) => (
              <Pentagon
                title={item.title}
                id={item.id}
                description={item.description}
                newTemplate = {newTemplate}
              />
          ))}
          </ol>
          </div>
        <div className="flex justify-center items-center gap-4 text-gray-700" >
          <p className="text-xl">You like this style? </p>
          <button onClick={downloadPdf} className="bg-teal-700 p-2 rounded text-white">Download PDF</button>
          <span>or</span>
          <button onClick={newTemplate} className="bg-teal-700 p-2 rounded text-white">Regenerate new style</button>
        </div>
      </div>
    )
  } else if(templateIndex === 1) {
    content = (
      <div>
          <div ref={pdfRef} className='flex flex-col items-center h-full text-gray-900 bg-white'>
          <header className='text-center my-6 mx-4 relative z-10'>
            <h1 className='font-bold text-2xl m-4'>{data.tagline}</h1>
            <p className='text-slate-700 font-medium text-xl m-4'>{data.description}</p>
          </header>
          <ol className={`relative z-20 p-10 w-full flex flex-col gap-6 items-center`}>
              {data.items.map((item) => (
                  <Card
                    title={item.title}
                    id={item.id}
                    description={item.description}
                    newTemplate = {newTemplate}
                  />
              ))}
          </ol>
          </div>
        <div className="flex justify-center items-center gap-4 text-gray-700" >
          <p className="text-xl">You like this style? </p>
          <div></div>
          <button onClick={downloadPdf} className="bg-teal-700 p-2 rounded text-white">Download PDF</button>
          <span>or</span>
          <button onClick={newTemplate} className="bg-teal-700 p-2 rounded text-white">Regenerate new style</button>
        </div>
      </div>
    )
  } else {
    content = (
      <div>
          <div ref={pdfRef} className='flex flex-col h-full text-gray-900 bg-white'>
          <header className='my-6 mx-4 relative z-10'>
            <h1 className='font-bold text-2xl m-4 text-[#8B4121]'>{data.tagline}</h1>
            <p className='text-[#E8894B] font-medium text-lg m-4'>{data.description}</p>
          </header>
          <div className="flex items-start h-full my-4">
            <ol className={`flex flex-col gap-3 lg:w-[70%]`}>
              {data.items.map((item) => (
                  <Press
                    title={item.title}
                    id={item.id}
                    description={item.description}
                    newTemplate = {newTemplate}
                  />
              ))}
            </ol>
            <div className='hidden lg:block w-[30%] h-full bg-[url("https://images.pexels.com/photos/1759478/pexels-photo-1759478.jpeg?auto=compress&cs=tinysrgb&w=600")]'>
               <img className="h-full w-full" src="images/press.jpg" alt="press image" />
               <img className="h-full w-full" src="images/press.jpg" alt="press image" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-gray-700" >
          <div className="flex items-center gap-2">
            <p className="text-xl">You like this style? </p>
            <button onClick={downloadPdf} className="bg-stone-900 p-2 text-white">Download PDF</button>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span>or</span>
            <button onClick={newTemplate} className="bg-stone-900 p-2 text-white">Generate new style</button>
          </div>
        </div>
      </div>
    )
  }
  

  return (
    <section className="bg-white py-4">
      {content}
    </section>
    
  )
}

export default Presentation