import React from 'react';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Xarxes: React.FC = () => {
    return (
        <div className="flex gap-16 justify-center mb-10">
            <a href="https://instagram.com/agab884?igshid=ZDdkNTZiNTM=">
                <FaInstagram size={80} color='#000'/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100085713752080">
                <FaFacebook color='#000' size={80} />
            </a>
            <a href="mailto:agabanimals@gmail.com">
                <FaEnvelope size={80} color='#000' />
            </a>
        </div>
    );
};

export default Xarxes;