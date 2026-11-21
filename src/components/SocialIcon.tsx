import type { IconType } from "react-icons";
import {
  SiDevdotto,
  SiGithub,
  SiInstagram,
  SiLeetcode,
  SiLinktree,
  SiMedium,
  SiStackoverflow,
  SiTiktok,
  SiX,
  SiYoutube,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import type { SocialKey } from "@/lib/site";

export const socialIcons: Record<SocialKey, IconType> = {
  youtube: SiYoutube,
  tiktok: SiTiktok,
  instagram: SiInstagram,
  linkedin: FaLinkedinIn,
  github: SiGithub,
  x: SiX,
  stackoverflow: SiStackoverflow,
  leetcode: SiLeetcode,
  devto: SiDevdotto,
  medium: SiMedium,
  linktree: SiLinktree,
};
