import React, { useState } from 'react';
import { AlertCircle, ChevronDown, ChevronUp, Dna, Users, Brain, Lightbulb } from 'lucide-react';

const InfoCard = ({ title, icon, content, extraContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {icon}
          <h3 className="ml-2 font-semibold">{title}</h3>
        </div>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          <p>{content}</p>
          {extraContent && (
            <div className="mt-2 p-2 bg-white rounded">
              <h4 className="font-semibold mb-1">更多資訊：</h4>
              {extraContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const VoiceGeneInfographic = () => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gradient-to-b from-blue-100 to-purple-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-800">人類聲音與ABCC9基因的神奇關係</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard 
          title="ABCC9基因的發現" 
          icon={<Dna className="text-blue-500" />}
          content="科學家發現ABCC9基因的突變與人類聲音的高低有關。這項突破性發現發表於《科學》雜誌。"
          extraContent="這個發現可能解釋為什麼有些人天生具有較高或較低的聲音。"
        />
        
        <InfoCard 
          title="冰島研究的獨特性" 
          icon={<Users className="text-green-500" />}
          content="冰島「基因解碼公司」利用當地人口單純、醫療記錄完整的優勢，研究了12901位冰島人的基因資訊。"
          extraContent="冰島的地理位置和人口特點使其成為基因研究的理想地點。"
        />
        
        <InfoCard 
          title="ABCC9基因的作用機制" 
          icon={<Brain className="text-yellow-500" />}
          content="ABCC9基因可能與製造離子管道有關，影響膠原蛋白和彈性蛋白的功能，這些蛋白對聲帶震動很重要。"
          extraContent="這個機制不僅影響聲音，還可能與心臟功能有關。含ABCC9突變者可能更容易罹患心臟疾病。"
        />
        
        <InfoCard 
          title="研究的廣泛意義" 
          icon={<Lightbulb className="text-purple-500" />}
          content="這項研究有助於了解語言障礙的原因，以及人類如何在進化過程中適應環境。"
          extraContent="未來的研究可能幫助我們了解絕對音感、節奏感等語言天賦的基因機制。"
        />
      </div>

      <div className="mt-8 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">有趣的事實</h2>
        <ul className="list-disc pl-5">
          <li>在靈長類動物中，只有人類擁有說話的能力，這與Fox基因有關。</li>
          <li>聲音的高低與體型和荷爾蒙有關，這解釋了為什麼女性的聲音通常比男性高。</li>
          <li>高頻聲音的能力也可能是遺傳的，常見於某些家族中。</li>
        </ul>
      </div>
    </div>
  );
};

export default VoiceGeneInfographic;
