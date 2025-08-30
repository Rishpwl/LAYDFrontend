import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import LegalAwareness from './LegalAwareness';
import CompanyRegistrationPage from './CompanyRegistration';
import CivilMattersPage from './CivilMattersPage';
import DLServicesGrid from './LinkImg';
import FamilyMatters from './Pages/FamilyMatters';
import PropertyMatters from './Pages/PropertyMatters';
import ServiceMatters from './Pages/ServiceMatters';
import IntellectualRights from './Pages/IntellectualRights';
import CriminalMatters from './Pages/CriminalMatters';
import ElectionMatters from './Pages/ElectionMatters';
import LandAndPropertyMatters from './Pages/LandProperty';
import TaxMatters from './Pages/TaxMatters';
import CyberLawMatters from './Pages/CyberMatters';
import LLPCorporation from './Pages/LLPCorporation';
import Section8Company from './Pages/Section8Company';
import GstRegistrations from './Pages/GSTRegistration';
import PatentLaw from './Pages/PatentLaw';
import TrademarkLaw from './Pages/TradeMarkLaw';
import CopyrightLaw from './Pages/CopyRight';
import DesignLaw from './Pages/DesignLaw';
import ConsumerRights from './Pages/ConsumerRights';
import TribunalMatters from './Pages/TribunalRights';
import EnvironmentalMatters from './Pages/Environment';
import SignIn from './Pages/signin';



function App() {
  return (
    <Router>
      <Header />
     
      <Routes>
       
   <Route path='/' element={<DLServicesGrid/>}/>
       <Route path='/design' element={<DesignLaw/>}/>
         <Route path='/civil-matters' element={<CivilMattersPage/>}/>
          <Route path='/environmental-matters' element={<EnvironmentalMatters/>}/>
          <Route path='/tribunal-matters' element={<TribunalMatters/>}/>
         <Route path='/consumer-rights' element={<ConsumerRights/>}/>
         <Route path='/patent' element={<PatentLaw/>}/>
          <Route path='/copyright' element={<CopyrightLaw/>}/>

            <Route path='/trademark' element={<TrademarkLaw/>}/>
          <Route path='/gst-registration' element={<GstRegistrations/>}/>


         <Route path='/section-8company-registration' element={<Section8Company/>}/>
          <Route path='/tax-matters' element={<TaxMatters/>}/>
          <Route path='/llp-incorporation' element={<LLPCorporation/>}/>
          <Route path='/cyber-matters' element={<CyberLawMatters/>}/>
          <Route path='/property-matters' element={<LandAndPropertyMatters/>}/>

         <Route path='/election-matters' element={<ElectionMatters/>}/>
         <Route path='/criminal-matters' element={<CriminalMatters/>}/>
           <Route path='/intllectual-rights' element={<IntellectualRights/>}/>
         <Route path='/civil-matters/family' element={<FamilyMatters/>}/>
          <Route path='/civil-matters/service' element={<ServiceMatters/>}/>
            <Route path='/civil-matters/property' element={<PropertyMatters/>}/>
        <Route path="/legal-awareness" element={<LegalAwareness />} />
        <Route path="/company-registration" element={<CompanyRegistrationPage />} />
        <Route path="/signin" element={<SignIn/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
