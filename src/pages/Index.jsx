import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                <HeroSection />
            </main>
        </div>
    )
}

export default Index;