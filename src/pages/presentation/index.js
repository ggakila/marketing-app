import { useRef, useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import Card from "@/components/templates/Card"
import Pentagon from "@/components/templates/Pentagon"
import Press from "@/components/templates/Press"
import useResponse from "@/hooks/useResponse"


const Presentation = () => {

  const { results } = useResponse()

  const [templateIndex, setTemplateIndex] = useState(0)
  const pdfRef = useRef()

  const newTemplate = () => {
    if(templateIndex >= 0 && templateIndex < 3 ){
      setTemplateIndex(templateIndex + 1)
    }else if(templateIndex > 2){
      setTemplateIndex(0)
    }
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
  if(!results) content = <p>Loading...</p>

  if(results) {
    if(templateIndex === 0 ) {
      content = (
        <div>
            <div ref={pdfRef} className='flex flex-col items-center h-full text-gray-900 bg-white'>
            <header className='text-center my-6 mx-4 relative z-10'>
              <h1 className='font-bold text-2xl m-4'>{results.tagline}</h1>
              <p className='text-slate-700 font-medium text-xl m-4'>{results.description}</p>
            </header>
            <ol className={`relative z-20 p-10 grid gap-14 justify-items-center md:grid-cols-2 lg:grid-cols-3 lg:gap-y-14 w-full`}>
            {results?.sections?.map((section) => (
                <Pentagon
                  title={section.sectionTitle}
                  id={section.id}
                  description={section.description}
                />
            ))}
            </ol>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-700 mt-4" >
            <div className="flex items-center gap-2">
              <p className="text-xl">You like this style? </p>
              <button onClick={downloadPdf} className="bg-stone-900 p-2 text-white">Download PDF</button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>or</span>
              <button onClick={newTemplate} className="bg-stone-900 p-2 text-white">Generate new style</button>
            </div>
          </div>
        </div>
      )
    } else if(templateIndex === 1) {
      content = (
        <div>
            <div ref={pdfRef} className='flex flex-col items-center h-full text-gray-900 bg-white'>
            <header className='text-center my-6 mx-4 relative z-10'>
              <h1 className='font-bold text-2xl m-4'>{results.tagline}</h1>
              <p className='text-slate-700 font-medium text-xl m-4'>{results.description}</p>
            </header>
            <ol className={`relative z-20 p-10 w-full flex flex-col gap-6 items-center`}>
                {results?.sections?.map((section) => (
                    <Card
                      title={section.sectionTitle}
                      id={section.id}
                      description={section.description}
                    />
                ))}
            </ol>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-700 mt-4" >
            <div className="flex items-center gap-2">
              <p className="text-xl">You like this style? </p>
              <button onClick={downloadPdf} className="bg-stone-900 p-2 text-white">Download PDF</button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>or</span>
              <button onClick={newTemplate} className="bg-stone-900 p-2 text-white">Generate new style</button>
            </div>
          </div>
        </div>
      )
    } else {
      content = (
        <div>
          <div ref={pdfRef} className='flex flex-col h-full text-gray-900 bg-white'>
            <header className='my-6 mx-4 relative z-10'>
              <h1 className='font-bold text-2xl m-4 text-[#8B4121]'>{results.tagline}</h1>
              <p className='text-[#E8894B] font-medium text-lg m-4'>{results.description}</p>
            </header>
            <div className="flex items-start h-full my-4">
              <ol className={`flex flex-col gap-3 lg:w-[70%]`}>
                {results?.sections?.map((section) => (
                    <Press
                      title={section.sectionTitle}
                      id={section.id}
                      description={section.description}
                    />
                ))}
              </ol>
              <div className='hidden lg:block w-[30%] h-full bg-[url("https://images.pexels.com/photos/1759478/pexels-photo-1759478.jpeg?auto=compress&cs=tinysrgb&w=600")]'>
                 <img className="h-full w-full" src="images/press.jpg" alt="press image" />
                 <img className="h-full w-full" src="images/press.jpg" alt="press image" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-700 mt-4" >
            <div className="flex items-center gap-2">
              <p className="text-xl">You like this style? </p>
              <button onClick={downloadPdf} className="bg-stone-900 p-2 text-white">Download PDF</button>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>or</span>
              <button onClick={newTemplate} className="bg-stone-900 p-2 text-white">Generate new style</button>
            </div>
          </div>
        </div>
      )
    }
  }
  
  

  return (
    <section className="bg-white py-4">
      {content}
    </section>
    
  )
}

export default Presentation