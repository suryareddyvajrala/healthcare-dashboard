import { healthStatus } from '../data/healthData';
import anatomyImage from '../../assets/anatomy-placeholder.png';

function AnatomySection() {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-center relative">
            <img src={anatomyImage} alt="Human Anatomy" className="h-64" />
            <div className="absolute top-20 left-20">
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Healthy Heart
                </div>
            </div>
            <div className="absolute bottom-20 right-20">
                <div className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full flex items-center">
                    <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                    Healthy Leg
                </div>
            </div>
        </div>
    );
}

export default AnatomySection;