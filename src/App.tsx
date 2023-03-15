import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home/Home'
import Page404 from '@/pages/Page404/Page404'
import PageStructure from '@/components/layout/pageStructure/PageStructure'
import PrivacyPolicy from '@/pages/privacyPolicy/PrivacyPolicy'

const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<PageStructure />}>
        <Route path="" element={<Home />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
