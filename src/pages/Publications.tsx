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
//   const publications = [
//     {
//       title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
//       authors: "Kushwaha R.;Kumar P.;Hisaki Y.",
//       venue: "Atmospheric Research, Volume 327",
//       year: 2025,
//       link: "http://dx.doi.org/10.1016/j.atmosres.2025.108367"
// },
// {
//       title: "Computational Analysis of Visakhapatnam Port with Variable Bathymetry using SBEM",
//       authors: "Priya P.;Kumar P.;Prasad R.;Om D.;Rajni R.",
//       venue: "Aip Conference Proceedings, Volume 3283",
//       year: 2025,
//       link: "https://doi.org/10.1063/5.0265326"
// },
// {
//       title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
//       authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
//       venue: "Ocean Modelling, Volume 197",
//       year: 2025,
//       link: "https://doi.org/10.1016/j.ocemod.2025.102592"
// },

// {
//       title: "Nonlinear coupled 2D Boussinesq type equations for shallow water waves using finite volume finite difference methods",
//       authors: "Vinita ;Kumar P.;Priya P.",
//       venue: "Ocean Dynamics, Volume 75",
//       year: 2025,
//       link: "https://doi.org/10.1007/s10236-025-01701-7"
// },
// {
//       title: "Comparing Different Machine Learning and Deep Learning Models for Daily Rainfall Prediction at Kerala Point Location",
//       authors: "Jha K.;Kumar P.",
//       venue: "3rd IEEE International Conference on Device Intelligence Computing and Communication Technologies Dicct 2025",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/10986746"
// },
// {
//       title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
//       authors: "Saha K.K.;Kumar P.;Singh A.;Kamranzad B.;Young I.R.;Rajni",
//       venue: "Ocean Modelling, Volume 196",
//       year: 2025,
//       link: "https://doi.org/10.1016/j.ocemod.2025.102560"
// },
// {
//       title: "Numerical Modeling of Mangalore Port Including Wave Energy Dissipators using the Boundary Element Method",
//       authors: "Thakran K.;Rupali ;Priya P.;Kumar P.;Rajoria Y.K.",
//       venue: "Recent Trends in Engineering and Science for Resource Optimization and Sustainable Development, Year 2025",
//       year: 2025,
//       link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003596721-57/numerical-modeling-mangalore-port-including-wave-energy-dissipators-using-boundary-element-method-komal-thakran-rupali-prachi-priya-prashant-kumar-yogendra-kumar-rajoria"
// },
// {
//       title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
//       authors: "Tiwari H.;Kumar P.;Prasad R.;Saha K.K.;Singh A.;Cherifi H.;Rajni",
//       venue: " IEEE Transactions on Artificial Intelligence, Volume 6",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/10742544"
// },
// {
//       title: "Trend Analysis of Extreme Wind and Wave Height at Key Port Locations Along the Indian Coastline",
//       authors: "Prasad R.;Kumar P.;Singh A.;Sunil A.;Kumar A.;Patra A.;Rajni",
//       venue: "Thalassas, Volume 41",
//       year: 2025,
//       link: "https://link.springer.com/article/10.1007/s41208-024-00762-7"
// },
// {
//       title: "Deep Learning Model for Monthly Rainfall Prediction in Metropolitan Cities in India",
//       authors: "Sharma A.;Kumar P.",
//       venue: " 7th International Conference on Energy Power and Environment Icepe 2025",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/11139405"
// },
// {
//       title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
//       authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
//       venue: "Ocean Modelling, Volume 197",
//       year: 2025,
//       link: "https://scite.ai/reports/assessment-of-projected-changes-in-b2DDDNLv?utm_campaign=badge&utm_medium=badge&utm_source=nitdelhi.irins.org"
// },
// {
//       title: "Sea Level Anomaly Prediction using Multivariate Stacked LSTM Model at Key Coastal Locations of India",
//       authors: "Rohila V.;Kumar P.;Mahajan A.",
//       venue: "2025 Global Conference in Emerging Technology Ginotech 2025,",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/11076805/"
// },
// {
//       title: "Assessing CMIP6 Model Accuracy in Capturing Wind Speed Variability During Indian Ocean Dipole Events",
//       authors: "Prasad R.;Kumar P.;Yadav A.;Chhavi ;Singh A.;Bhaskaran P.K.;Patra A.;Rajni",
//       venue: "Pure and Applied Geophysics",
//       year: 2025,
//       link: "https://link.springer.com/article/10.1007/s00024-025-03823-x"
// },
// {
//       title: "Assessing renewable energy potential: wind and wave trends along major Indian ports",
//       authors: "Prashant Kumar; Ramakant Prasad; Kamlesh Kumar Saha; Anurag Singh; Prasad Kumar Bhaskaran; T. M. Bal...",
//       venue: "Journal of Water and Climate Change",
//       year: 2025,
//       link: "https://iwaponline.com/jwcc/article/16/10/3157/109753/Assessing-renewable-energy-potential-wind-and-wave"
// },
// {
//       title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
//       authors: "Sunil A.;Kumar P.;Singh A.;Agarwal A.;Kumar A.;Kim S.Y.;Rajni",
//       venue: "International Journal of Climatology,",
//       year: 2025,
//       link: "https://rmets.onlinelibrary.wiley.com/doi/10.1002/joc.70121"
// },
// {
//       title: "Mitigation of wave resonance in a multi-connected port using a combination of permeable-impermeable breakwaters and variable-depth channels",
//       authors: "Priya P.;Thakran K.;Rupali ;Kumar P.",
//       venue: "Ocean Dynamics,Volumne 75",
//       year: 2025,
//       link: "https://link.springer.com/article/10.1007/s10236-025-01717-z"
// },
// {
//       title: "Real-Time Traffic Sign Detection and Warning System Using Deep Learning for Vehicle Safety",
//       authors: "Garg P.;Kumar P.",
//       venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/11076714"
// },
// {
//       title: "Assessing wave energy spectra at major Indian ports using the dual reciprocity boundary element technique",
//       authors: "Priya P.;Vinita ;Kumar P.;Prasad R.;Hisaki Y.;Rajni",
//       venue: "Ocean Engineering, Volume 341",
//       year: 2025,
//       link: "https://www.sciencedirect.com/science/article/pii/S0029801825022073?via%3Dihub"
// },
// {
//       title: "Multi-Model Ensemble Learning Prediction of Surface Air Temperature in Four Major Metro Cities: A Stacking-Based Approach",
//       authors: "Mishra P.;Mahajan A.;Kumar P.;Garg P.",
//       venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/11077110"
// },
// {
//       title: "Predicting Surface Temperature at Indian Ports Using Machine Learning Models",
//       authors: "Sarkar P.;Kumar P.",
//       venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
//       year: 2025,
//       link: "https://ieeexplore.ieee.org/document/11077004"
// },
// {
//       title: "Mean and extreme wave power using ERA5: A global analysis",
//       authors: "Sardana D.;Kumar P.;Priya P.;Rajni",
//       venue: "Aip Conference Proceedings, Volume 3010",
//       year: 2024,
//       link: "https://doi.org/10.1063/5.0193940"
// },
// {
//       title: "CMIP6 model evaluation for sea surface height responses to ENSO",
//       authors: "Sardana D.;Kumar P.;Rajni",
//       venue: "Climate Dynamics, Volume 62, Year 2024, Pages 1829-1847",
//       year: 2024,
//       link: "https://link.springer.com/article/10.1007/s00382-023-06997-z"
// },
// {
//       title: "Influence of climate variability modes over wind-sea and swell generated wave energy",
//       authors: "Sardana D.;Kumar P.;Rajni",
//       venue: "Ocean Engineering, Volume 291",
//       year: 2024,
//       link: "https://linkinghub.elsevier.com/retrieve/pii/S002980182302855X"
// },
// {
//       title: "Wind-wave climate changes and their impacts",
//       authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
//       venue: "Nature Reviews Earth and Environment, Volume 5, Pages 23-42",
//       year: 2024,
//       link: "https://www.nature.com/articles/s43017-023-00502-0"
// },

// {
//       title: "Correction to: Wind-wave climate changes and their impacts (Nature Reviews Earth & Environment, (2024), 5, 1, (23-42), 10.1038/s43017-023-00502-0)",
//       authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
//       venue: "Nature Reviews Earth and Environment, Volume 5, Year 2024, Pages 152",
//       year: 2024,
//       link: "https://www.nature.com/articles/s43017-024-00518-0"
// },
// {
//       title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
//       authors: "Kumar P.;Yadav A.;Sardana D.;Prasad R.;Rajni",
//       venue: "Ocean Engineering, Volume 296",
//       year: 2024,
//       link: "https://www.sciencedirect.com/science/article/pii/S0029801824001264?via%3Dihub"
// },
// {
//       title: "Forecasting of renewable energy production in United States: An ARIMA based time series analysis",
//       authors: "Rajni ;Banerjee T.;Kumar P.",
//       venue: "Aip Conference Proceedings, Volume 3010",
//       year: 2024,
//       link: "https://pubs.aip.org/aip/acp/article/3010/1/030014/3261181/Forecasting-of-renewable-energy-production-in"
// },
// {
//       title: "CMIP6 Model Evaluation for Mean and Extreme Precipitation Over India",
//       authors: "Kushwaha P.;Pandey V.K.;Kumar P.;Sardana D.",
//       venue: "Pure and Applied Geophysics, Volume 181, Year 2024, Pages 655-678",
//       year: 2024,
//       link: "https://link.springer.com/article/10.1007/s00024-023-03409-5"
// },
// {
//       title: "CMIP6 Model Evaluation for Wind Speed Responses to IOD during Monsoon Season over the Indian Ocean",
//       authors: "Ramakant Prasad;Prashant Kumar;Anshu Yadav;Anurag Singh;Divya Sardana;Yukiharu Hisaki",
//       venue: "Pre-Print",
//       year: 2024,
//       link: "https://www.researchsquare.com/article/rs-4275922/v1"
// },
// {
//       title: "Evaluation of ocean wave power utilizing COWCLIP 2.0 datasets: a CMIP5 model assessment",
//       authors: "Yadav A.;Kumar P.;Bhaskaran P.K.;Hisaki Y.;Rajni",
//       venue: "Climate Dynamics, Volume 62, Year 2024, Pages 9447-9468",
//       year: 2024,
//       link: "https://link.springer.com/article/10.1007/s00382-024-07402-z"
// },
// {
//       title: "Evaluation of ocean wave power utilizing COWCLIP 2.0 datasets: a CMIP5 model assessment",
//       authors: "Yadav A.;Kumar P.;Bhaskaran P.K.;Hisaki Y.;Rajni",
//       venue: "Climate Dynamics, Volume 62, Year 2024, Pages 9447-9468",
//       year: 2024,
//       link: ""
// },
// {
//       title: "CMIP6 Model Evaluation for Mean and Extreme Precipitation Over India",
//       authors: "Kushwaha P.;Pandey V.K.;Kumar P.;Sardana D.",
//       venue: "Pure and Applied Geophysics, Volume 181, Year 2024, Pages 655-678",
//       year: 2024,
//       link: "https://link.springer.com/article/10.1007/s00024-023-03409-5"
// },
// {
//       title: "CMIP6 Model Evaluation for Wind Speed Responses to IOD during Monsoon Season over the Indian Ocean",
//       authors: "Ramakant Prasad;Prashant Kumar;Anshu Yadav;Anurag Singh;Divya Sardana;Yukiharu Hisaki",
//       venue: "Climate",
//       year: 2024,
//       link: "https://www.researchsquare.com/article/rs-4275922/v1"
// },
//   ];
      const publications = [
      {
        title: "Global future heat stress projections: Regional variations of Humidex changes from high-resolution CMIP6 models",
        authors: "Kushwaha R.;Kumar P.;Hisaki Y.",
        venue: "Atmospheric Research, Volume 327 DOI:10.1016/j.atmosres.2025.108367",
        year: 2026,
        link: "https://www.sciencedirect.com/science/article/pii/S0169809525004594?via%3Dihub"
      },
      {
        title: "Intelligent Routing for Smart and Sustainable Transportation: Multi-modal Real-Time Data Based Deep Reinforcement Learning Framework",
        authors: "Shweta Jain;Rajni;Prashant Kumar",
        venue: "IEEE EPSCON 2026",
        year: 2026,
        link: "https://link.springer.com/chapter/10.1007/978-3-032-23241-0_8"
      },
      {
        title: "Predicting extreme storm surge along the Indian coastline using a physics-guided machine learning ensemble",
        authors: "Arju;Prashant Kumar;Bahareh Kamranzad;T.M. Balakrishnan Nair",
        venue: "Ocean Engineering",
        year: 2026,
        link: "https://www.sciencedirect.com/science/article/pii/S0029801826012552"
      },
      {
        title: "Indian Ocean Sea Surface Temperature Modulates the Arctic Oscillation: A Multi‐Model Assessment Using CMIP6",
        authors: "Anushka Sunil;Prashant Kumar;Anurag Singh;Rajni",
        venue: "International Journal of Climatology",
        year: 2026,
        link: "https://www.researchgate.net/publication/399560125_Indian_Ocean_Sea_Surface_Temperature_Modulates_the_Arctic_Oscillation_A_Multi-Model_Assessment_Using_CMIP6"
      },
      {
        title: "Role of Major Climate Modes on Arctic Sea Ice Dynamics",
        authors: "Anushka Sunil;Prashant Kumar;Avinash Kumar",
        venue: "Sea-Ice Modelling and Observations",
        year: 2025,
        link: "https://www.researchgate.net/publication/398228415_Role_of_Major_Climate_Modes_on_Arctic_Sea_Ice_Dynamics"
      },
      {
        title: "Seasonal Influence of ENSO, IOD, and MJO on Heat Index -Derived Heat Stress across India",
        authors: "Rishabh Kushwaha;Prashant Kumar",
        venue: "Conference Poster",
        year: 2025,
        link: "Seasonal Influence of ENSO, IOD, and MJO on Heat Index -Derived Heat Stress across India"
      },
      {
        title: "Predicting Surface Temperature at Indian Ports Using Machine Learning Models",
        authors: "Sarkar P.;Kumar P.",
        venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
        year: 2025,
        link: "https://ieeexplore.ieee.org/document/11077004"
      },
      {
        title: "Predicting Wave Power Along India’s Coast",
        authors: "Sarthak Tilwankar;Prashant Kumar;Amit Mahajan",
        venue: "WCONF",
        year: 2025,
        link: "https://www.researchgate.net/publication/397695057_Predicting_Wave_Power_Along_India's_Coast"
      },
      {
        title: "Mathematical Modeling of Two-Dimensional Depth Integrated Nonlinear Coupled Boussinesq-Type Equations for Shallow-Water Waves with Ship-Born Generation Waves in Coastal Regions",
        authors: "Vinita;Prashant Kumar",
        venue: "Journal of Marine Science and Engineering",
        year: 2025,
        link: "https://www.researchgate.net/publication/389840879_Mathematical_Modeling_of_Two-Dimensional_Depth_Integrated_Nonlinear_Coupled_Boussinesq-Type_Equations_for_Shallow-Water_Waves_with_Ship-Born_Generation_Waves_in_Coastal_Regions"
      },
      //////// old
      {
        title: "Computational Analysis of Visakhapatnam Port with Variable Bathymetry using SBEM",
        authors: "Priya P.;Kumar P.;Prasad R.;Om D.;Rajni R.",
        venue: "Aip Conference Proceedings",
        year: 2025,
        link: "https://doi.org/10.1063/5.0265326"
      },
      {
        title: "Assessment of projected changes in mean and extreme wave power across the Indian coastal sectors under high-emission climate scenarios",
        authors: "Yadav A.;Kumar P.;Kamranzad B.;Bhaskaran P.K.;Rajni",
        venue: "Ocean Modelling",
        year: 2025,
        link: "https://doi.org/10.1016/j.ocemod.2025.102592"
      },
      {
        title: "Nonlinear coupled 2D Boussinesq type equations for shallow water waves using finite volume finite difference methods",
        authors: "Vinita ;Kumar P.;Priya P.",
        venue: "Ocean Dynamics",
        year: 2025,
        link: "https://doi.org/10.1007/s10236-025-01701-7"
      },
      {
        title: "Comparing Different Machine Learning and Deep Learning Models for Daily Rainfall Prediction at Kerala Point Location",
        authors: "Jha K.;Kumar P.",
        venue: "3rd IEEE International Conference on Device Intelligence Computing and Communication Technologies Dicct 2025",
        year: 2025,
        link: "https://doi.org/10.1109/DICCT64131.2025.10986746"
      },
      {
        title: "Assessment and future projections of storm surge using CMIP6 models in the Indo-Pacific region",
        authors: "Saha K.K.;Kumar P.;Singh A.;Kamranzad B.;Young I.R.;Rajni",
        venue: "Ocean Modelling",
        year: 2025,
        link: "https://doi.org/10.1016/j.ocemod.2025.102560"
      },
      {
        title: "Numerical Modeling of Mangalore Port Including Wave Energy Dissipators using the Boundary Element Method",
        authors: "Thakran K.;Rupali ;Priya P.;Kumar P.;Rajoria Y.K.",
        venue: "Recent Trends in Engineering and Science for Resource Optimization and Sustainable Development",
        year: 2025,
        link: "https://doi.org/10.1201/9781003596721-57"
      },
      {
        title: "Bridging the Climate Gap: Multimodel Framework With Explainable Decision-Making for IOD and ENSO Forecasting",
        authors: "Tiwari H.;Kumar P.;Prasad R.;Saha K.K.;Singh A.;Cherifi H.;Rajni",
        venue: "IEEE Transactions on Artificial Intelligence",
        year: 2025,
        link: "https://doi.org/10.1109/TAI.2024.3489535"
      },
      {
        title: "Trend Analysis of Extreme Wind and Wave Height at Key Port Locations Along the Indian Coastline",
        authors: "Prasad R.;Kumar P.;Singh A.;Sunil A.;Kumar A.;Patra A.;Rajni",
        venue: "Thalassas",
        year: 2025,
        link: "https://doi.org/10.1007/s41208-024-00762-7"
      },
      {
        title: "Navigating Urban Air Pollution: Trends and Climate Links in Indian Megacities",
        authors: "Gulia S.;Kumar K.;Kumar P.;Yadav A.;Rajni",
        venue: "Environmental Quality Management",
        year: 2025,
        link: "https://doi.org/10.1002/tqem.70210"
      },
      {
        title: "Sea Level Anomaly Prediction using Multivariate Stacked LSTM Model at Key Coastal Locations of India",
        authors: "Rohila V.;Kumar P.;Mahajan A.",
        venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
        year: 2025,
        link: "https://doi.org/10.1109/GINOTECH63460.2025.11076805"
      },
      {
        title: "Deep Learning Model for Monthly Rainfall Prediction in Metropolitan Cities in India",
        authors: "Sharma A.;Kumar P.",
        venue: "7th International Conference on Energy Power and Environment Icepe 2025",
        year: 2025,
        link: "https://doi.org/10.1109/ICEPE65965.2025.11139405"
      },
      {
        title: "Assessing CMIP6 Model Accuracy in Capturing Wind Speed Variability During Indian Ocean Dipole Events",
        authors: "Prasad R.;Kumar P.;Yadav A.;Chhavi ;Singh A.;Bhaskaran P.K.;Patra A.;Rajni",
        venue: "Pure and Applied Geophysics",
        year: 2025,
        link: "https://doi.org/10.1007/s00024-025-03823-x"
      },
      {
        title: "Assessing renewable energy potential: wind and wave trends along major Indian ports",
        authors: "Kumar P.;Prasad R.;Saha K.K.;Singh A.;Bhaskaran P.K.;Balakrishnan T.M.;Patra A.;Vinita ;Rajni",
        venue: "Journal of Water and Climate Change",
        year: 2025,
        link: "https://doi.org/10.2166/wcc.2025.091"
      },
      {
        title: "Assessing the Impact of Climate Modes on Extreme Arctic Sea Ice Using Reanalysis Data",
        authors: "Sunil A.;Kumar P.;Singh A.;Agarwal A.;Kumar A.;Kim S.Y.;Rajni",
        venue: "International Journal of Climatology",
        year: 2025,
        link: "https://doi.org/10.1002/joc.70121"
      },
      {
        title: "Mitigation of wave resonance in a multi-connected port using a combination of permeable-impermeable breakwaters and variable-depth channels",
        authors: "Priya P.;Thakran K.;Rupali ;Kumar P.",
        venue: "Ocean Dynamics",
        year: 2025,
        link: "https://doi.org/10.1007/s10236-025-01717-z"
      },
      {
        title: "Real-Time Traffic Sign Detection and Warning System Using Deep Learning for Vehicle Safety",
        authors: "Garg P.;Kumar P.",
        venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
        year: 2025,
        link: "https://doi.org/10.1109/GINOTECH63460.2025.11076714"
      },
      {
        title: "Assessing wave energy spectra at major Indian ports using the dual reciprocity boundary element technique",
        authors: "Priya P.;Vinita ;Kumar P.;Prasad R.;Hisaki Y.;Rajni",
        venue: "Ocean Engineering",
        year: 2025,
        link: "https://doi.org/10.1016/j.oceaneng.2025.122524"
      },
      {
        title: "Multi-Model Ensemble Learning Prediction of Surface Air Temperature in Four Major Metro Cities: A Stacking-Based Approach",
        authors: "Mishra P.;Mahajan A.;Kumar P.;Garg P.",
        venue: "2025 Global Conference in Emerging Technology Ginotech 2025",
        year: 2025,
        link: "https://doi.org/10.1109/GINOTECH63460.2025.11077110"
      },
      {
        title: "CMIP6 Model Evaluation for Mean and Extreme Precipitation Over India",
        authors: "Kushwaha P.;Pandey V.K.;Kumar P.;Sardana D.",
        venue: "Pure and Applied Geophysics",
        year: 2024,
        link: "https://doi.org/10.1007/s00024-023-03409-5"
      },
      {
        title: "CMIP6 model evaluation for sea surface height responses to ENSO",
        authors: "Sardana D.;Kumar P.;Rajni",
        venue: "Climate Dynamics",
        year: 2024,
        link: "https://doi.org/10.1007/s00382-023-06997-z"
      },
      {
        title: "Influence of climate variability modes over wind-sea and swell generated wave energy",
        authors: "Sardana D.;Kumar P.;Rajni",
        venue: "Ocean Engineering",
        year: 2024,
        link: "https://doi.org/10.1016/j.oceaneng.2023.116471"
      },
      {
        title: "Wind-wave climate changes and their impacts",
        authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
        venue: "Nature Reviews Earth and Environment",
        year: 2024,
        link: "https://doi.org/10.1038/s43017-023-00502-0"
      },
      {
        title: "Correction to: Wind-wave climate changes and their impacts",
        authors: "Casas-Prat M.;Hemer M.A.;Dodet G.;Morim J.;Wang X.L.;Mori N.;Young I.;Erikson L.;Kamranzad B.;Kumar ...",
        venue: "Nature Reviews Earth and Environment",
        year: 2024,
        link: "https://doi.org/10.1038/s43017-024-00518-0"
      },
      {
        title: "Extreme wave height response to climate modes and its association with tropical cyclones over the Indo-Pacific Ocean",
        authors: "Kumar P.;Yadav A.;Sardana D.;Prasad R.;Rajni",
        venue: "Ocean Engineering",
        year: 2024,
        link: "https://doi.org/10.1016/j.oceaneng.2024.116789"
      },
      {
        title: "Forecasting of renewable energy production in United States: An ARIMA based time series analysis",
        authors: "Rajni ;Banerjee T.;Kumar P.",
        venue: "Aip Conference Proceedings",
        year: 2024,
        link: "https://doi.org/10.1063/5.0193938"
      },
      {
        title: "Mean and extreme wave power using ERA5: A global analysis",
        authors: "Sardana D.;Kumar P.;Priya P.;Rajni",
        venue: "Aip Conference Proceedings",
        year: 2024,
        link: "https://doi.org/10.1063/5.0193940"
      },
      {
        title: "CMIP6 Model Evaluation for Wind Speed Responses to IOD during Monsoon Season over the Indian Ocean",
        authors: "Ramakant Prasad;Prashant Kumar;Anshu Yadav;Anurag Singh;Divya Sardana;Yukiharu Hisaki",
        venue: "Preprint",
        year: 2024,
        link: "https://doi.org/10.21203/rs.3.rs-4275922/v1"
      },
      {
        title: "Impact of the Pacific-Japan pattern on the tropical Indo-western Pacific Ocean surface waves",
        authors: "Srinivas G.;Remya P.G.;Dey S.P.;Chowdary J.S.;Kumar P.",
        venue: "Climate Dynamics",
        year: 2024,
        link: "https://doi.org/10.1007/s00382-024-07357-1"
      },
      {
        title: "Evaluation of ocean wave power utilizing COWCLIP 2.0 datasets: a CMIP5 model assessment",
        authors: "Yadav A.;Kumar P.;Bhaskaran P.K.;Hisaki Y.;Rajni",
        venue: "Climate Dynamics",
        year: 2024,
        link: "https://doi.org/10.1007/s00382-024-07402-z"
      },
      {
        title: "Mathematical Modeling for Non-linear Wave Interaction of Submerged Body Using Hybrid Element Method",
        authors: "Kumar P.;Priya P.;Rajni",
        venue: "Lecture Notes in Mechanical Engineering",
        year: 2023,
        link: "https://doi.org/10.1007/978-981-19-1929-9_2"
      },
      {
        title: "Mathematical modelling of nonlinear pressure drops in arbitrarily shaped port utilizing dual boundary element method",
        authors: "Priya P.;Kumar P.;Rajni",
        venue: "Ocean Engineering",
        year: 2023,
        link: "https://doi.org/10.1016/j.oceaneng.2023.114154"
      },
      {
        title: "Wave Spectral Analysis of Visakhapatnam Port under the Resonance Conditions",
        authors: "Priya P.;Kumar P.;Rajni",
        venue: "Advances in Transdisciplinary Engineering",
        year: 2023,
        link: "https://doi.org/10.3233/ATDE221335"
      },
      {
        title: "Evaluation of COWCLIP2.0 Ocean wave extreme indices over the Indian Ocean",
        authors: "Kaur S.;Kumar P.;Min S.K.;Krishnan A.;Wang X.L.",
        venue: "Climate Dynamics",
        year: 2023,
        link: "https://doi.org/10.1007/s00382-023-06882-9"
      },
      {
        title: "Barrier and bottom topography effects on hydroelastic response of floating elastic plate in a two-layer fluid",
        authors: "Prasad N.M.;Prasad R.M.;Kumar P.;Kumar P.;Prasad C.M.",
        venue: "Geophysical and Astrophysical Fluid Dynamics",
        year: 2023,
        link: "https://doi.org/10.1080/03091929.2023.2231134"
      },
      {
        title: "The projected changes in extreme wave height indices over the Indian Ocean using COWCLIP2.0 datasets",
        authors: "Sardana D.;Kumar P.;Bhaskaran P.K.;Nair T.M.B.",
        venue: "Climate Dynamics",
        year: 2023,
        link: "https://doi.org/10.1007/s00382-022-06579-5"
      },
      {
        title: "Influence of climate variability on wind-sea and swell wave height extreme over the Indo-Pacific Ocean",
        authors: "Kumar P.;Sardana D.;Kaur S.;Remya P.G.;Rajni ;Weller E.",
        venue: "International Journal of Climatology",
        year: 2022,
        link: "https://doi.org/10.1002/joc.7584"
      },
      {
        title: "CMIP5 model evaluation for extreme ocean wave height responses to ENSO",
        authors: "Kaur S.;Kumar P.;Min S.K.;Patra A.;Wang X.L.",
        venue: "Climate Dynamics",
        year: 2022,
        link: "https://doi.org/10.1007/s00382-021-06039-6"
      },
      {
        title: "Extreme wind-wave climate projections for the Indian Ocean under changing climate scenarios",
        authors: "Krishnan A.;Bhaskaran P.K.;Kumar P.",
        venue: "Climate Dynamics",
        year: 2022,
        link: "https://doi.org/10.1007/s00382-022-06147-x"
      },
      {
        title: "Mathematical modeling of long waves in an irregular shaped harbor using boundary element method",
        authors: "Kumar P.;Sardana D.;Rajni",
        venue: "Aip Conference Proceedings",
        year: 2022,
        link: "https://doi.org/10.1063/5.0083545"
      },
      {
        title: "Linear shoaling and linear dispersion using Boussinesq type equations for water wave propagation in nearshore",
        authors: "Vinita ;Kumar P.",
        venue: "Aip Conference Proceedings",
        year: 2022,
        link: "https://doi.org/10.1063/5.0083751"
      },
      {
        title: "Seasonal extreme rainfall variability over India and its association with surface air temperature",
        authors: "Sardana D.;Kumar P.;Weller E.;Rajni",
        venue: "Theoretical and Applied Climatology",
        year: 2022,
        link: "https://doi.org/10.1007/s00704-022-04045-0"
      },
      {
        title: "Mathematical modelling of Visakhapatnam Port utilizing the porous and non-porous breakwaters with finite depth green function",
        authors: "Kumar P.;Priya P.;Rajni",
        venue: "Ocean Dynamics",
        year: 2022,
        link: "https://doi.org/10.1007/s10236-022-01519-7"
      },
      {
        title: "Influence of climate variability on sea level rise and its teleconnection with sea surface temperature anomalies over the Indo-Pacific Ocean",
        authors: "Kumar P.;Sardana D.;Weller E.;Bhaskaran P.K.",
        venue: "International Journal of Climatology",
        year: 2022,
        link: "https://doi.org/10.1002/joc.7893"
      },
      {
        title: "Wave spectral density in paradip port utilizing the partial reflecting boundary",
        authors: "Priya P.;Kumar P.;Rupali ;Rajni",
        venue: "Materials Today Proceedings",
        year: 2022,
        link: "https://doi.org/10.1016/j.matpr.2022.08.400"
      },
      {
        title: "Finite element modeling of extreme wave analysis with dissipation in arbitrary shaped domain",
        authors: "Rupali ;Kumar P.;Priya P.;Rajni ;Bahuguna R.",
        venue: "Materials Today Proceedings",
        year: 2022,
        link: "https://doi.org/10.1016/j.matpr.2022.08.476"
      },
      {
        title: "Theoretical and numerical studies of boussinesq equations for onshore shallow-water wave propagation",
        authors: "Kumar P.;Vinita X.;Rajni X.",
        venue: "Wave Dynamics",
        year: 2022,
        link: "https://doi.org/10.1142/9789811245367_0003"
      },
      {
        title: "Mathematical Modelling of Non-Linear Transient Long Waves by using Finite Element Method in an Irregular Shaped Harbour",
        authors: "Kaur S.;Kumar P.;Rajni",
        venue: "Mathematical and Computer Modelling of Dynamical Systems",
        year: 2021,
        link: "https://doi.org/10.1080/13873954.2021.1973510"
      },
      {
        title: "Positive relationship between seasonal Indo-Pacific Ocean wave power and SST",
        authors: "Kaur S.;Kumar P.;Weller E.;Young I.R.",
        venue: "Scientific Reports",
        year: 2021,
        link: "https://doi.org/10.1038/s41598-021-97047-3"
      },
      {
        title: "Changes in extreme ocean wave heights under 1.5 °C, 2 °C, and 3 °C global warming",
        authors: "Patra A.;Min S.K.;Kumar P.;Wang X.L.",
        venue: "Weather and Climate Extremes",
        year: 2021,
        link: "https://doi.org/10.1016/j.wace.2021.100358"
      },
      {
        title: "CMIP5 model performance of significant wave heights over the Indian Ocean using COWCLIP datasets",
        authors: "Krishnan A.;Bhaskaran P.K.;Kumar P.",
        venue: "Theoretical and Applied Climatology",
        year: 2021,
        link: "https://doi.org/10.1007/s00704-021-03642-9"
      },
      {
        title: "Multi-model ensemble projections of extreme ocean wave heights over the Indian ocean",
        authors: "Kaur S.;Kumar P.;Weller E.;Min S.K.;Jin J.",
        venue: "Climate Dynamics",
        year: 2021,
        link: "https://doi.org/10.1007/s00382-020-05578-8"
      },
      {
        title: "Mathematical modeling of regular and irregular shallow water waves using Boussinesq equation with improved dispersion",
        authors: "Kumar P.;Rupali V.",
        venue: "Indian Journal of Pure and Applied Physics",
        year: 2021,
        link: "N/A"
      },
      {
        title: "Mathematical modeling of arbitrary shaped harbor with permeable and impermeable breakwaters using hybrid finite element method",
        authors: "Rupali ;Kumar P.",
        venue: "Ocean Engineering",
        year: 2021,
        link: "https://doi.org/10.1016/j.oceaneng.2020.108551"
      },
      {
        title: "Regional sea level changes in the Indian shelf sea and its association with SST anomalies",
        authors: "Kumar P.;Sardana D.;Rajni",
        venue: "Regional Studies in Marine Science",
        year: 2021,
        link: "https://doi.org/10.1016/j.rsma.2021.101992"
      },
      {
        title: "Moored ship motion under the resonance conditions with breakwaters: A coupled numerical approach",
        authors: "Rupali ;Kumar P.;Rajni",
        venue: "Ocean Engineering",
        year: 2021,
        link: "https://doi.org/10.1016/j.oceaneng.2021.110022"
      },
      {
        title: "Boundary Element Modeling of Multiconnected Ocean Basin in Visakhapatnam Port Under the Resonance Conditions",
        authors: "Kumar P.;Priya P.;Rajni",
        venue: "China Ocean Engineering",
        year: 2021,
        link: "https://doi.org/10.1007/s13344-021-0058-4"
      },
      {
        title: "Evaluation of spatial spreading of phyto-available sulphur and micronutrients in cultivated coastal soils",
        authors: "Shukla A.K.;Behera S.K.;Tripathi R.;Prakash C.;Nayak A.K.;Kumar P.S.;Chitdeshwari T.;Kumar D.;Nayak ...",
        venue: "Plos One",
        year: 2021,
        link: "https://doi.org/10.1371/journal.pone.0258166"
      },
      {
        title: "Influence of Natural Climate Variability on Extreme Wave Power over Indo-Pacific Ocean Assessed using ERA5",
        authors: "Prashant Kumar;Sukhwinder Kaur;Evan Weller;Ian R. Young",
        venue: "Preprint",
        year: 2021,
        link: "https://doi.org/10.21203/rs.3.rs-372607/v1"
      },
      {
        title: "Spectral boundary element modeling of water waves in Pohang New Harbor and Paradip Port",
        authors: "Rupali ;Kumar P.;Rajni",
        venue: "Ocean Engineering",
        year: 2020,
        link: "https://doi.org/10.1016/j.oceaneng.2019.106765"
      },
      {
        title: "Moored ship motion analysis in Paradip port under the resonance conditions using 3-D boundary element method",
        authors: "Gulshan ;Kumar P.;Rajni",
        venue: "Journal of Marine Science and Technology Japan",
        year: 2020,
        link: "https://doi.org/10.1007/s00773-020-00701-0"
      },
      {
        title: "Spectral wave modeling of tsunami waves in Pohang New Harbor (South Korea) and Paradip Port (India)",
        authors: "Rupali ;Kumar P.;Rajni",
        venue: "Ocean Dynamics",
        year: 2020,
        link: "https://doi.org/10.1007/s10236-020-01414-z"
      },
      {
        title: "Numerical modeling of ion size effect on osmotic pressure in cylindrical nanochannels",
        authors: "Rajni R.;Kumar P.",
        venue: "Aip Conference Proceedings",
        year: 2020,
        link: "https://doi.org/10.1063/5.0003416"
      },
      {
        title: "Analysis of moored ship motions using 3-D boundary element method inside realistic harbor",
        authors: "Gulshan G.;Kumar P.;Rajni R.",
        venue: "Aip Conference Proceedings",
        year: 2020,
        link: "https://doi.org/10.1063/5.0003337"
      },
      {
        title: "The numerical solution of Boussinesq equation for shallow water waves",
        authors: "Patel P.;Kumar P.;Rajni R.",
        venue: "Aip Conference Proceedings",
        year: 2020,
        link: "https://doi.org/10.1063/5.0003339"
      },
      {
        title: "Numerical Simulation of Tropical Cyclone Mora Using a Regional Coupled Ocean-Atmospheric Model",
        authors: "Agrawal N.;Pandey V.K.;Kumar P.",
        venue: "Pure and Applied Geophysics",
        year: 2020,
        link: "https://doi.org/10.1007/s00024-020-02563-4"
      },
      {
        title: "Liquid cooling of a microprocessor: experimentation and simulation of a sub-millimeter channel heat exchanger",
        authors: "Fontaine J.;Gonzalez C.;Kumar P.;Pigache F.;Lavieille P.;Topin F.;Miscevic M.",
        venue: "Heat Transfer Engineering",
        year: 2020,
        link: "https://doi.org/10.1080/01457632.2019.1628485"
      },
      {
        title: "Numerical Modeling of Ion-Size Effect on Electroosmotic Flow in Nanochannels",
        authors: "Rajni ;Kumar P.",
        venue: "Proceedings of the Jangjeon Mathematical Society",
        year: 2019,
        link: "https://doi.org/10.17777/pjms2019.22.1.193"
      },
      {
        title: "Spectral boundary element method for shallow water waves",
        authors: "Rupali ;Gulshan ;Kumar P.",
        venue: "Aip Conference Proceedings",
        year: 2019,
        link: "https://doi.org/10.1063/1.5086631"
      },
      {
        title: "Influence of Natural Climate Variability on the Extreme Ocean Surface Wave Heights Over the Indian Ocean",
        authors: "Kumar P.;Kaur S.;Weller E.;Min S.K.",
        venue: "Journal of Geophysical Research Oceans",
        year: 2019,
        link: "https://doi.org/10.1029/2019JC015391"
      },
      {
        title: "Modeling of Wave-Induced Oscillation in Pohang New Harbor by Using Hybrid Finite Element Model",
        authors: "Prashant Kumar;Rupali;Rajni",
        venue: "Mechanics of Generalized Continu A",
        year: 2019,
        link: "https://doi.org/10.1007/978-3-030-02487-1_28"
      },
      {
        title: "Heat transfer intensification in an actuated heat exchanger submitted to an imposed pressure drop",
        authors: "Schmidmayer K.;Kumar P.;Lavieille P.;Miscevic M.;Topin F.",
        venue: "Plos One",
        year: 2019,
        link: "https://doi.org/10.1371/journal.pone.0219441"
      },
      {
        title: "Wave spectrum analysis for extreme wave oscillation inside Paradip port",
        authors: "Gulshan ;Kumar P.;Patel P.;Rupali ;Kaur S.",
        venue: "Aip Conference Proceedings",
        year: 2019,
        link: "https://doi.org/10.1063/1.5086632"
      },
      {
        title: "Wave Induced Oscillation in an Irregular Domain by using Hybrid Finite Element Model",
        authors: "Kumar P.;Rajni ;Rupali",
        venue: "Journal of Physics Conference Series",
        year: 2018,
        link: "https://doi.org/10.1088/1742-6596/1039/1/012019"
      },
      {
        title: "Modeling of shallow water waves with variable bathymetry in an irregular domain by using hybrid finite element method",
        authors: "Kumar P.;Rupali",
        venue: "Ocean Engineering",
        year: 2018,
        link: "https://doi.org/10.1016/j.oceaneng.2018.07.024"
      },
      {
        title: "Theoretical analysis of extreme wave oscillation in Paradip Port using a 3-D boundary element method",
        authors: "Kumar P.;Gulshan",
        venue: "Ocean Engineering",
        year: 2018,
        link: "https://doi.org/10.1016/j.oceaneng.2018.06.029"
      },
      {
        title: "Mathematical modeling of influence of ion size effects in an electrolyte in a nanoslit with overlapped EDL",
        authors: "Rajni ;Kumar P.",
        venue: "Aip Conference Proceedings",
        year: 2017,
        link: "https://doi.org/10.1063/1.5008684"
      },
      {
        title: "Multidirectional random wave diffraction in a real harbor by using 3-D boundary element method",
        authors: "Kumar P.;Gulshan ;Rajni",
        venue: "Aip Conference Proceedings",
        year: 2017,
        link: "https://doi.org/10.1063/1.5008685"
      },
      {
        title: "Extreme Wave-Induced Oscillation in Paradip Port Under the Resonance Conditions",
        authors: "Kumar P.;Gulshan",
        venue: "Pure and Applied Geophysics",
        year: 2017,
        link: "https://doi.org/10.1007/s00024-017-1646-3"
      },
      {
        title: "Influence of morphology on flow law characteristics in open-cell foams: An overview of usual approaches and correlations",
        authors: "Kumar P.;Topin F.",
        venue: "Journal of Fluids Engineering Transactions of the ASME",
        year: 2017,
        link: "https://doi.org/10.1115/1.4036160"
      },
      {
        title: "Modeling wave and spectral characteristics of moored ship motion in Pohang New Harbor under the resonance conditions",
        authors: "Kumar P.;Zhang H.;Ik Kim K.;Yuen D.A.",
        venue: "Ocean Engineering",
        year: 2016,
        link: "https://doi.org/10.1016/j.oceaneng.2016.04.027"
      },
      {
        title: "Influence of climate variability on extreme ocean surface wave heights assessed from ERA-interim and ERA-20C",
        authors: "Kumar P.;Min S.K.;Weller E.;Lee H.;Wang X.L.",
        venue: "Journal of Climate",
        year: 2016,
        link: "https://doi.org/10.1175/JCLI-D-15-0580.1"
      },
      {
        title: "A moored ship motion analysis in realistic Pohang New Harbor and modified PNH",
        authors: "Kumar P.;Batra G.;Kim K.I.",
        venue: "Springer Proceedings in Mathematics and Statistics",
        year: 2016,
        link: "https://doi.org/10.1007/978-981-10-1454-3_17"
      },
      {
        title: "Hydrodynamic Modeling of Moored Ship Motion in an Irregular Domain",
        authors: "Kumar P.;Ik K.K.",
        venue: "Procedia Engineering",
        year: 2015,
        link: "https://doi.org/10.1016/j.proeng.2015.11.350"
      },
      {
        title: "Wave spectral modeling of multidirectional random waves in a harbor through combination of boundary integral of Helmholtz equation with Chebyshev point discretization",
        authors: "Kumar P.;Zhang H.;Kim K.I.;Shi Y.;Yuen D.A.",
        venue: "Computers and Fluids",
        year: 2015,
        link: "https://doi.org/10.1016/j.compfluid.2014.11.021"
      },
      {
        title: "Impact of anisotropy on geometrical and thermal conductivity of metallic foam structures",
        authors: "Kumar P.;Topin F.",
        venue: "Journal of Porous Media",
        year: 2015,
        link: "https://doi.org/10.1615/JPorMedia.2015012247"
      },
      {
        title: "Spectral Density Analysis for Wave Characteristics in Pohang New Harbor",
        authors: "Kumar P.;Zhang H.;Kim K.I.",
        venue: "Pure and Applied Geophysics",
        year: 2014,
        link: "https://doi.org/10.1007/s00024-013-0710-x"
      },
      {
        title: "Micro-structural Impact of Different Strut Shapes and Porosity on Hydraulic Properties of Kelvin-Like Metal Foams",
        authors: "Kumar P.;Topin F.",
        venue: "Transport in Porous Media",
        year: 2014,
        link: "https://doi.org/10.1007/s11242-014-0358-8"
      },
      {
        title: "Wave field analysis in a harbor with irregular geometry through boundary integral of Helmholtz equation with corner contributions",
        authors: "Kumar P.;Zhang H.;Yuen D.A.;Kim K.I.",
        venue: "Computers and Fluids",
        year: 2013,
        link: "https://doi.org/10.1016/j.compfluid.2013.09.020"
      },
      // {
      //   title: "Role of equilibrium plasma flow on damping of slow MHD waves",
      //   authors: "Kumar N.;Kumar P.;Kumar A.;Chauhan R.",
      //   venue: "Indian Journal of Physics",
      //   year: 2011,
      //   link: "https://doi.org/10.1007/s12648-011-0191-7"
      // },
      // {
      //   title: "Erratum: \"Scattering of surface and internal waves by rectangular dikes\"",
      //   authors: "Kumar P.S.;Bhattacharjee J.;Sahoo T.",
      //   venue: "Journal of Offshore Mechanics and Arctic Engineering",
      //   year: 2008,
      //   link: "N/A"
      // },
      // {
      //   title: "Retraction: “scattering of surface and internal waves by rectangular dikes”",
      //   authors: "Kumar P.S.;Bhattacharjee J.;Sahoo T.",
      //   venue: "Journal of Offshore Mechanics and Arctic Engineering",
      //   year: 2008,
      //   link: "https://doi.org/10.1115/1.2901917"
      // },
      // {
      //   title: "Wave interaction with a flexible porous breakwater in a two-layer fluid",
      //   authors: "Kumar P.S.;Sahoo T.",
      //   venue: "Journal of Engineering Mechanics",
      //   year: 2006,
      //   link: "https://doi.org/10.1061/(ASCE)0733-9399(2006)132:9(1007)"
      // },
      // {
      //   title: "Coronal heating by MHD waves",
      //   authors: "Kumar N.;Kumar P.;Singh S.",
      //   venue: "Astronomy and Astrophysics",
      //   year: 2006,
      //   link: "https://doi.org/10.1051/0004-6361:20054141"
      // }
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
              {publications.length - index}
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