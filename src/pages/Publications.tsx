// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { BookOpen, ExternalLink } from "lucide-react";

// const Publications = () => {
//   const publications = [
//     // {
//     //   title: "Arctic Amplification and Global Climate Feedbacks",
//     //   authors: "Rodriguez, M., Chen, A., Martinez, S.",
//     //   venue: "Nature Climate Change",
//     //   year: 2024,
//     // },
//     // {
//     //   title: "Ocean-Atmosphere Coupling in Climate Models",
//     //   authors: "Rodriguez, M., Johnson, M., Wang, E.",
//     //   venue: "Journal of Climate",
//     //   year: 2023,
//     // },
//     // {
//     //   title: "Carbon Cycle Dynamics in Coastal Ecosystems",
//     //   authors: "Rodriguez, M., Kim, D., Garcia, R.",
//     //   venue: "Global Biogeochemical Cycles",
//     //   year: 2023,
//     // },
//     // {
//     //   title: "Extreme Weather Attribution in a Warming Climate",
//     //   authors: "Rodriguez, M., Park, J., Anderson, L.",
//     //   venue: "Geophysical Research Letters",
//     //   year: 2022,
//     // }
//     {
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       authors: "Kushwaha R.;Kumar P.;Hisaki Y.",
//       venue: "Atmospheric Research, Volume 327 DOI:10.1016/j.atmosres.2025.108367",
//       year: 2026
// },
// {
//       title: "Computational Analysis of Visakhapatnam Port with Variable Bathymetry using SBEM",
//       authors: "Priya P.;Kumar P.;Prasad R.;Om D.;Rajni R.",
//       venue: "Aip Conference Proceedings, Volume 3283 DOI:10.1063/5.0265326",
//       year: 2025
// },
// {
//       title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
//       authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
//       venue: "Ocean Modelling, Volume 197 DOI:10.1016/j.ocemod.2025.102592",
//       year: 2025
// },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto animate-fade-in">
//       <h1 className="text-4xl font-bold mb-6">Publications</h1>
      
//       <div className="space-y-4">
//         {publications.map((pub, index) => (
//           <Card key={index} className="hover:shadow-lg transition-all duration-300">
//             <CardContent className="p-6">
//               <div className="flex gap-4">
//                 <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
//                 <div className="flex-grow">
//                   <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
//                   <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
//                   <p className="text-sm font-semibold text-primary mb-2">{pub.venue}</p>
//                   <div className="flex items-center gap-3">
//                     <Badge variant="outline">{pub.year}</Badge>
//                     <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
//                       <ExternalLink className="h-3 w-3" />
//                       View Paper
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Publications;


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
      authors: "Kushwaha R.;Kumar P.;Hisaki Y.",
      venue: "Atmospheric Research, Volume 327",
      year: 2025,
      link: "http://dx.doi.org/10.1016/j.atmosres.2025.108367"
},
{
      title: "Computational Analysis of Visakhapatnam Port with Variable Bathymetry using SBEM",
      authors: "Priya P.;Kumar P.;Prasad R.;Om D.;Rajni R.",
      venue: "Aip Conference Proceedings, Volume 3283",
      year: 2025,
      link: "https://doi.org/10.1063/5.0265326"
},
{
      title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
      authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
      venue: "Ocean Modelling, Volume 197",
      year: 2025,
      link: "https://doi.org/10.1016/j.ocemod.2025.102592"
},

{
      title: "Nonlinear coupled 2D Boussinesq type equations for shallow water waves using finite volume finite difference methods",
      authors: "Vinita ;Kumar P.;Priya P.",
      venue: "Ocean Dynamics, Volume 75",
      year: 2025,
      link: "https://doi.org/10.1007/s10236-025-01701-7"
},
{
      title: "Comparing Different Machine Learning and Deep Learning Models for Daily Rainfall Prediction at Kerala Point Location",
      authors: "Jha K.;Kumar P.",
      venue: "3rd IEEE International Conference on Device Intelligence Computing and Communication Technologies Dicct 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/10986746"
},
{
      title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
      authors: "Saha K.K.;Kumar P.;Singh A.;Kamranzad B.;Young I.R.;Rajni",
      venue: "Ocean Modelling, Volume 196",
      year: 2025,
      link: "https://doi.org/10.1016/j.ocemod.2025.102560"
},
{
      title: "Numerical Modeling of Mangalore Port Including Wave Energy Dissipators using the Boundary Element Method",
      authors: "Thakran K.;Rupali ;Priya P.;Kumar P.;Rajoria Y.K.",
      venue: "Recent Trends in Engineering and Science for Resource Optimization and Sustainable Development, Year 2025",
      year: 2025,
      link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003596721-57/numerical-modeling-mangalore-port-including-wave-energy-dissipators-using-boundary-element-method-komal-thakran-rupali-prachi-priya-prashant-kumar-yogendra-kumar-rajoria"
},
{
      title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
      authors: "Tiwari H.;Kumar P.;Prasad R.;Saha K.K.;Singh A.;Cherifi H.;Rajni",
      venue: " IEEE Transactions on Artificial Intelligence, Volume 6",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/10742544"
},
{
      title: "Trend Analysis of Extreme Wind and Wave Height at Key Port Locations Along the Indian Coastline",
      authors: "Prasad R.;Kumar P.;Singh A.;Sunil A.;Kumar A.;Patra A.;Rajni",
      venue: "Thalassas, Volume 41",
      year: 2025,
      link: "https://link.springer.com/article/10.1007/s41208-024-00762-7"
},
{
      title: "Deep Learning Model for Monthly Rainfall Prediction in Metropolitan Cities in India",
      authors: "Sharma A.;Kumar P.",
      venue: " 7th International Conference on Energy Power and Environment Icepe 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11139405"
},
{
      title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
      authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
      venue: "Ocean Modelling, Volume 197",
      year: 2025,
      link: "https://scite.ai/reports/assessment-of-projected-changes-in-b2DDDNLv?utm_campaign=badge&utm_medium=badge&utm_source=nitdelhi.irins.org"
},
{
      title: "Sea Level Anomaly Prediction using Multivariate Stacked LSTM Model at Key Coastal Locations of India",
      authors: "Rohila V.;Kumar P.;Mahajan A.",
      venue: "2025 Global Conference in Emerging Technology Ginotech 2025,",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11076805/"
},
{
      title: "Assessing CMIP6 Model Accuracy in Capturing Wind Speed Variability During Indian Ocean Dipole Events",
      authors: "Prasad R.;Kumar P.;Yadav A.;Chhavi ;Singh A.;Bhaskaran P.K.;Patra A.;Rajni",
      venue: "Pure and Applied Geophysics",
      year: 2025,
      link: "https://link.springer.com/article/10.1007/s00024-025-03823-x"
},
{
      title: "Assessing renewable energy potential: wind and wave trends along major Indian ports",
      authors: "Prashant Kumar; Ramakant Prasad; Kamlesh Kumar Saha; Anurag Singh; Prasad Kumar Bhaskaran; T. M. Bal...",
      venue: "Journal of Water and Climate Change",
      year: 2025,
      link: "https://iwaponline.com/jwcc/article/16/10/3157/109753/Assessing-renewable-energy-potential-wind-and-wave"
},
{
      title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
      authors: "Sunil A.;Kumar P.;Singh A.;Agarwal A.;Kumar A.;Kim S.Y.;Rajni",
      venue: "International Journal of Climatology,",
      year: 2025,
      link: "https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.70121"
},
{
      title: "Mitigation of wave resonance in a multi-connected port using a combination of permeable-impermeable breakwaters and variable-depth channels",
      authors: "Priya P.;Thakran K.;Rupali ;Kumar P.",
      venue: "Ocean Dynamics,Volumne 75",
      year: 2025,
      link: "https://link.springer.com/article/10.1007/s10236-025-01717-z"
},
{
      title: "Real-Time Traffic Sign Detection and Warning System Using Deep Learning for Vehicle Safety",
      authors: "Garg P.;Kumar P.",
      venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11076714"
},
{
      title: "Assessing wave energy spectra at major Indian ports using the dual reciprocity boundary element technique",
      authors: "Priya P.;Vinita ;Kumar P.;Prasad R.;Hisaki Y.;Rajni",
      venue: "Ocean Engineering, Volume 341",
      year: 2025,
      link: "https://www.sciencedirect.com/science/article/pii/S0029801825022073?via%3Dihub"
},
{
      title: "Multi-Model Ensemble Learning Prediction of Surface Air Temperature in Four Major Metro Cities: A Stacking-Based Approach",
      authors: "Mishra P.;Mahajan A.;Kumar P.;Garg P.",
      venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11077110"
},
{
      title: "Predicting Surface Temperature at Indian Ports Using Machine Learning Models",
      authors: "Sarkar P.;Kumar P.",
      venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11077004"
},
{
      title: "Mean and extreme wave power using ERA5: A global analysis",
      authors: "Sardana D.;Kumar P.;Priya P.;Rajni",
      venue: "Aip Conference Proceedings, Volume 3010",
      year: 2024,
      link: "https://doi.org/10.1063/5.0193940"
},
{
      title: "CMIP6 model evaluation for sea surface height responses to ENSO",
      authors: "Sardana D.;Kumar P.;Rajni",
      venue: "Climate Dynamics, Volume 62, Year 2024, Pages 1829-1847",
      year: 2024,
      link: "https://link.springer.com/article/10.1007/s00382-023-06997-z"
},
{
      title: "Influence of climate variability modes over wind-sea and swell generated wave energy",
      authors: "Sardana D.;Kumar P.;Rajni",
      venue: "Ocean Engineering, Volume 291",
      year: 2024,
      link: "https://linkinghub.elsevier.com/retrieve/pii/S002980182302855X"
},
{
      title: "Wind-wave climate changes and their impacts",
      authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
      venue: "Nature Reviews Earth and Environment, Volume 5, Pages 23-42",
      year: 2024,
      link: "https://www.nature.com/articles/s43017-023-00502-0"
},

{
      title: "Correction to: Wind-wave climate changes and their impacts (Nature Reviews Earth & Environment, (2024), 5, 1, (23-42), 10.1038/s43017-023-00502-0)",
      authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
      venue: "Nature Reviews Earth and Environment, Volume 5, Year 2024, Pages 152",
      year: 2024,
      link: "https://www.nature.com/articles/s43017-024-00518-0"
},
{
      title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
      authors: "Kumar P.;Yadav A.;Sardana D.;Prasad R.;Rajni",
      venue: "Ocean Engineering, Volume 296",
      year: 2024,
      link: "https://www.sciencedirect.com/science/article/pii/S0029801824001264?via%3Dihub"
},
{
      title: "Forecasting of renewable energy production in United States: An ARIMA based time series analysis",
      authors: "Rajni ;Banerjee T.;Kumar P.",
      venue: "Aip Conference Proceedings, Volume 3010",
      year: 2024,
      link: "https://pubs.aip.org/aip/acp/article/3010/1/030014/3261181/Forecasting-of-renewable-energy-production-in"
},
{
      title: "CMIP6 Model Evaluation for Mean and Extreme Precipitation Over India",
      authors: "Kushwaha P.;Pandey V.K.;Kumar P.;Sardana D.",
      venue: "Pure and Applied Geophysics, Volume 181, Year 2024, Pages 655-678",
      year: 2024,
      link: "https://link.springer.com/article/10.1007/s00024-023-03409-5"
},
{
      title: "CMIP6 Model Evaluation for Wind Speed Responses to IOD during Monsoon Season over the Indian Ocean",
      authors: "Ramakant Prasad;Prashant Kumar;Anshu Yadav;Anurag Singh;Divya Sardana;Yukiharu Hisaki",
      venue: "Pre-Print",
      year: 2024,
      link: "https://www.researchsquare.com/article/rs-4275922/v1"
},
{
      title: "Evaluation of ocean wave power utilizing COWCLIP 2.0 datasets: a CMIP5 model assessment",
      authors: "Yadav A.;Kumar P.;Bhaskaran P.K.;Hisaki Y.;Rajni",
      venue: "Climate Dynamics, Volume 62, Year 2024, Pages 9447-9468",
      year: 2024,
      link: "https://link.springer.com/article/10.1007/s00382-024-07402-z"
},
{
      title: "Evaluation of ocean wave power utilizing COWCLIP 2.0 datasets: a CMIP5 model assessment",
      authors: "Yadav A.;Kumar P.;Bhaskaran P.K.;Hisaki Y.;Rajni",
      venue: "Climate Dynamics, Volume 62, Year 2024, Pages 9447-9468",
      year: 2024,
      link: ""
},
{
      title: "CMIP6 Model Evaluation for Mean and Extreme Precipitation Over India",
      authors: "Kushwaha P.;Pandey V.K.;Kumar P.;Sardana D.",
      venue: "Pure and Applied Geophysics, Volume 181, Year 2024, Pages 655-678",
      year: 2024,
      link: "https://link.springer.com/article/10.1007/s00024-023-03409-5"
},
{
      title: "CMIP6 Model Evaluation for Wind Speed Responses to IOD during Monsoon Season over the Indian Ocean",
      authors: "Ramakant Prasad;Prashant Kumar;Anshu Yadav;Anurag Singh;Divya Sardana;Yukiharu Hisaki",
      venue: "Climate",
      year: 2024,
      link: "https://www.researchsquare.com/article/rs-4275922/v1"
},
  ];

  const handleCardClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Publications</h1>
      
      {/* <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-primary"
            onClick={() => handleCardClick(pub.link)}
          >
            <CardContent className="p-6">
              <div className="flex gap-4">
                <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <p className="text-sm font-semibold text-primary mb-2">{pub.venue}</p>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{pub.year}</Badge>
                    <span className="text-sm text-primary flex items-center gap-1 transition-all group-hover:gap-2">
                      <ExternalLink className="h-3 w-3" />
                      View Paper
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
      <div className="space-y-4">
  {publications.map((pub, index) => (
    <Card 
      key={index} 
      className="hover:shadow-lg transition-all duration-300 group cursor-pointer hover:border-primary"
      onClick={() => handleCardClick(pub.link)}
    >
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            {/* <BookOpen className="h-6 w-6 text-primary mt-1 flex-shrink-0" /> */}
            <div className="mt-2 text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded-full min-w-6 text-center">
              {index + 1}
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {pub.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
            <p className="text-sm font-semibold text-primary mb-2">{pub.venue}</p>
            <div className="flex items-center gap-3">
              <Badge variant="outline">{pub.year}</Badge>
              <span className="text-sm text-primary flex items-center gap-1 transition-all group-hover:gap-2">
                <ExternalLink className="h-3 w-3" />
                View Paper
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ))}
</div>
    </div>
  );
};

export default Publications;