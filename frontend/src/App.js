import React from 'react'
import { Routes , Route , BrowserRouter } from 'react-router-dom'
import CashierBillForm from '../src/pages/CashierBillForm'
import Inventory from '../src/pages/Inventory'
import PharmacyBillForm from '../src/pages/PharmacyBillForm'
import PrescriptionForm from '../src/pages/PrescriptionForm'
import PrescriptionViewForm from '../src/pages/PrescriptionViewForm'
import CreatePatientRecords from '../src/pages/CreatePatientRecords'
import ViewPatientRecords from '../src/pages/ViewPatientRecords'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/prescription' element={<PrescriptionForm />} />
      <Route path='/inventory' element={<Inventory />} />
      <Route path='/cashier-bill-form' element={<CashierBillForm />} />
      <Route path='/pharmacy-bill-form' element={<PharmacyBillForm />} />
      <Route path='/prescription-view-form' element={<PrescriptionViewForm />} />
      <Route path='/create-patient-records' element={<CreatePatientRecords />} />
      <Route path='/view-patient-records' element={<ViewPatientRecords />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
