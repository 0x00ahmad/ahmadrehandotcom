import IconTypescript from "~icons/mdi/language-typescript";
import MdiLanguageJavascript from "~icons/mdi/language-javascript";
import MdiLanguagePython from "~icons/mdi/language-python";
import SimpleIconsRust from "~icons/simple-icons/rust";
import Fa6BrandsGolang from "~icons/fa6-brands/golang";
import TablerBrandKotlin from "~icons/tabler/brand-kotlin";
import MdiLanguageSwift from "~icons/mdi/language-swift";
import MdiLanguageCpp from "~icons/mdi/language-cpp";
import SimpleIconsSvelte from "~icons/simple-icons/svelte";
import TablerBrandNextjs from "~icons/tabler/brand-nextjs";
import MdiNodejs from "~icons/mdi/nodejs";
import SimpleIconsFastapi from "~icons/simple-icons/fastapi";
import MaterialSymbolsFiberSmartRecord from "~icons/material-symbols/fiber-smart-record";
import CarbonLogoReact from "~icons/carbon/logo-react";
import MaterialSymbolsAndroid from "~icons/material-symbols/android";
import DeviconPlainTauri from "~icons/devicon-plain/tauri";
import MdiDocker from "~icons/mdi/docker";
import FileIconsKubernetes from "~icons/file-icons/kubernetes";
import MdiAws from "~icons/mdi/aws";
import MdiInfinity from "~icons/mdi/infinity";
import MdiGit from "~icons/mdi/git";
import CibArchLinux from "~icons/cib/arch-linux";
import PhFigmaLogo from "~icons/ph/figma-logo";
import BxlSketch from "~icons/bxl/sketch";

export const SKILLS = {
  "Programming languages": [
    { name: "Typescript", icon: IconTypescript },
    { name: "Javascript", icon: MdiLanguageJavascript },
    { name: "Python", icon: MdiLanguagePython },
    { name: "Rust", icon: SimpleIconsRust },
    { name: "Golang", icon: Fa6BrandsGolang },
    { name: "Kotlin", icon: TablerBrandKotlin },
    { name: "Swift", icon: MdiLanguageSwift },
    { name: "C++", icon: MdiLanguageCpp },
  ],
  "Web / Mobile / Desktop": [
    { name: "Svelte", icon: SimpleIconsSvelte },
    { name: "Nextjs", icon: TablerBrandNextjs },
    { name: "Go Fiber", icon: MaterialSymbolsFiberSmartRecord },
    { name: "Server", icon: MdiNodejs },
    { name: "FastAPI", icon: SimpleIconsFastapi },
    { name: "React Native", icon: CarbonLogoReact },
    { name: "Android", icon: MaterialSymbolsAndroid },
    { name: "Tauri", icon: DeviconPlainTauri },
  ],
  DevOps: [
    { name: "Docker", icon: MdiDocker },
    { name: "Kubernetes", icon: FileIconsKubernetes },
    { name: "AWS", icon: MdiAws },
    { name: "CI/CD", icon: MdiInfinity },
  ],
  Others: [
    { name: "Git", icon: MdiGit },
    { name: "Linux", icon: CibArchLinux },
    { name: "Figma", icon: PhFigmaLogo },
    { name: "Sketch", icon: BxlSketch },
  ],
} as const;
