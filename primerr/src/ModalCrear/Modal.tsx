
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import GridModal from './GridModal';


export default function Modal() {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <GridModal />
            </Sidebar>
            <Button onClick={() => setVisible(true)} >CREAR VIVERO</Button>
        </div>
    )
}