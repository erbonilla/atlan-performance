import { Routes, Route } from 'react-router-dom';
import { useTheme } from '@hooks/useTheme';
import Layout from '@components/layout/Layout';

// Pages
import Home from '@pages/Home';
import Programs from '@pages/Programs';
import ProgramDetail from '@pages/ProgramDetail';
import Courses from '@pages/Courses';
import Community from '@pages/Community';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Subscription from '@pages/Subscription';
import NotFound from '@pages/NotFound';
import LegalPolicy from '@pages/LegalPolicy';

function App() {
    const { theme } = useTheme();

    return (
        <div className={`${theme} min-h-screen bg-background text-foreground`}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/programs/:slug" element={<ProgramDetail />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/subscribe" element={<Subscription />} />

                    {/* Legal Routes */}
                    <Route path="/privacy-policy" element={<LegalPolicy policyType="privacy" />} />
                    <Route path="/terms-of-service" element={<LegalPolicy policyType="terms" />} />
                    <Route path="/cookie-policy" element={<LegalPolicy policyType="cookies" />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
