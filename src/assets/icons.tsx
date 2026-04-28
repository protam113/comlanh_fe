import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  CircleUserRound,
  RectangleEllipsis,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  LayoutDashboard,
  ReceiptText,
  SquareGanttChart,
  ShoppingBasket,
  Ticket,
  Contact,
  Shield,
  Users,
  GroupIcon,
  ArrowLeft,
  ShieldBan,
  Logs,
  MessageCircleQuestion,
  SquareChartGantt,
  Package,
  TrainTrack,
  Search,
  ChartBarStacked,
  List,
  Loader2,
  AlertTriangle,
  ChevronRight,
  ArrowRight,
  ArrowUp,
  PhoneCall,
  RefreshCcwDot,
  Eye,
  EyeClosed,
  Trash,
  ArrowDown,
  X,
  Menu,
  Phone,
  CircleCheckBig,
  Cog,
  BrickWallShield,
  Building2,
  LayoutList,
  MessageSquareWarning,
  EllipsisVertical,
  Home,
  HeartPulseIcon,
  Bug,
  ChevronUp,
  ChevronDown,
  FolderGit2,
  Monitor,
  UserPlus,
  PencilIcon,
  TableProperties,
  ChartNoAxesGanttIcon,
  Delete,
  Replace,
  ChevronLeft,
  Form,
  BookOpenText,
  Shapes,
  Newspaper,
  MonitorCog,
  Settings,
  BarChart3,
  AlertCircle,
  FileText,
  FolderOpen,
  UserRound,
  Wrench,
  Server,
  Plus,
  Activity,
  FileCode,
  CheckCheck,
  Copy,
  Album,
  LayoutGrid,
  GalleryThumbnails,
  Box,
  ShoppingBag,
  ClipboardList,
  Mail,
  Globe,
  User,
  Save,
  Edit,
  Bookmark,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';

// Custom SVG Icons as React components
export const TikTok = ({ className, width = 24, height = 24 }: any) => (
  <Image
    src="/icons/tiktok.svg"
    alt="TikTok"
    width={width}
    height={height}
    className={className}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
);

export const Facebook = ({
  className,
  width = 24,
  height = 24,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <Image
    src="/icons/facebook.svg"
    alt="TikTok"
    width={width}
    height={height}
    className={className}
  />
);

export const Zalo = ({
  className,
  width = 24,
  height = 24,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <Image
    src="/icons/zalo.svg"
    alt="Zalo"
    width={width}
    height={height}
    className={className}
  />
);

// Aliases for deprecated icons
export const FacebookIcon = Facebook;

export const Arrows = {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
};

export const Icons = {
  Loader2,
  User,
  Save,
  AlertTriangle,
  Edit,
  ChevronRight,
  MapPin,
  PhoneCall,
  CheckCheck,
  Copy,
  List,
  RefreshCcwDot,
  Eye,
  EyeClosed,
  Trash,
  Plus,
  Search,
  LayoutGrid,
  X,
  Menu,
  Phone,
  LogOut,
  BrickWallShield,
  EllipsisVertical,
  HeartPulseIcon,
  Facebook,
  ChevronUp,
  ChevronDown,
  Monitor,
  UserPlus,
  PencilIcon,
  UserRound,
  Delete,
  Replace,
  FacebookIcon,
  TikTok,
  Zalo,
  Mail,
  Globe,
};

export const ComponentsIcons = {
  ChartNoAxesGanttIcon,
  FileText,
  Bookmark,
  FolderOpen,
  MonitorCog,
  UserRound,
  Search,
  CircleUserRound,
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
  RectangleEllipsis,
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  Shapes,
  Newspaper,
  SquareTerminal,
  MessageCircleQuestion,
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  LayoutDashboard,
  BookOpenText,
  Form,
  ReceiptText,
  ShoppingBasket,
  SquareGanttChart,
  Ticket,
  Contact,
  Box,
  ShoppingBag,
  ClipboardList,
  Shield,
  GalleryThumbnails,
  Users,
  GroupIcon,
  Logs,
  ArrowLeft,
  ShieldBan,
  List,
  SquareChartGantt,
  Package,
  TrainTrack,
  ChartBarStacked,
  CircleCheckBig,
  Cog,
  Building2,
  LayoutList,
  MessageSquareWarning,
  Home,
  Bug,
  FolderGit2,
  TableProperties,
  Settings,
  BarChart3,
  Album,
  AlertCircle,
  Wrench,
  Server,
  Plus,
  Activity,
  FileCode,
};
