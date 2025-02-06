import Link from 'next/link';
import { GiTigerHead } from "react-icons/gi";
import { Button } from '../ui/button';


function Logo()  {
    return (
    <Button size='icon' asChild>
        <Link href='/'>
            <GiTigerHead className='w-6 h-6' />
        </Link>
    </Button>
    );
}
export default Logo;
