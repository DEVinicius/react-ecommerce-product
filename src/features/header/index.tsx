import { DesktopHeader } from "../../components/desktopHeader";
import { ResponsiveHeader } from "../../components/reponsiveHeader";
import { useWindowSize } from "../../hooks/useWindowSize";

export function Header() {
    
    const { width } = useWindowSize();
    
    return (
        <>
            {
                width > 1000 ? <DesktopHeader /> : <ResponsiveHeader />
            }
        </>
    );
}