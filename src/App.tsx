import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/home/Home'
import Page404 from '@/pages/page404/Page404'
import PageStructure from '@/components/layout/pageStructure/PageStructure'
import PrivacyPolicy from '@/pages/privacyPolicy/PrivacyPolicy'
import About from '@/pages/about/About'
import PaymentAndDelivery from '@/pages/paymentAndDelivery/PaymentAndDelivery'

const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<PageStructure />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="payment-and-delivery" element={<PaymentAndDelivery />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
