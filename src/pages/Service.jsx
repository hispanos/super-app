import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Service = () => {

    const { type } = useParams()

    const [link, setLink] = useState("");

    useEffect(() => {
      if(type){
          switch (type) {
              case 'judicial':
                  setLink('https://antecedentes.policia.gov.co:7005/WebJudicial/antecedentes.xhtml')
                  break;

                  case 'procuraduria':
                  setLink('https://apps.procuraduria.gov.co/webcert/inicio.aspx?tpo=2')
                  break;

                  case 'contraloria':
                  setLink('https://cfiscal.contraloria.gov.co/Certificados/CertificadoPersonaNatural.aspx')
                  break;

                  case 'documentos':
                  setLink('https://webrp.policia.gov.co:444/publico/constancia.aspx')
                  break;
          
              default:
                  break;
          }
      }

    }, [type]);
    

  return (
      <>
        <div className="card card-style ms-0 me-0 rounded-0">
            <div className="content">
                <p className="mb-n1 color-highlight font-600">Bienvenido</p>
                <div className="divider"></div>
                <div>
                    <iframe src={link} height={400} width='100%' />
                </div>
            </div>
        </div>
      </>
  );
};

export default Service;
