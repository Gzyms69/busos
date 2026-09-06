import MapContainer from '@/components/MapContainer';
import LeftSidebar from '@/components/LeftSidebar';
import RightPanel from '@/components/RightPanel';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background text-foreground">
      <MapContainer />
      <LeftSidebar />
      <RightPanel />
    </main>
  );
}
