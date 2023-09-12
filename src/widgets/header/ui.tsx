import { assets } from "@/shared/config/images";
import Image from "next/image";
import Link from "next/link";
import { Github } from 'lucide-react';

export const Header = () => (
    <header className="container m-auto pt-[20px] pb-[10px] flex flex-col items-center gap-[32px] lg:flex-row border-b">
        <Link href="/">
            <Image src={assets.logo_black} alt="logo" width="40" height="34" />
        </Link>
        <div className="flex items-center gap-[32px] flex-1">
            <Link href="#projects" className="block text-[#242424] text-sm">Проекты</Link>
            <Link href="#resume" className="block text-[#242424] text-sm">Резюме</Link>
        </div>
        <div>
            <Link href="/github">
                <Github className="text-[#242424]" />
            </Link>
        </div>
    </header>
);