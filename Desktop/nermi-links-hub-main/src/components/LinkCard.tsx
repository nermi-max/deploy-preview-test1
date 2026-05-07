
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface LinkCardProps {
  href: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

const LinkCard = ({ href, label, icon, className }: LinkCardProps) => {
  return (
    <Button 
      asChild 
      variant="ghost" 
      className={cn(
        "glass-card w-full py-6 px-4 text-lg font-medium flex items-center justify-center gap-3",
        className
      )}
    >
      <Link to={href}>
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </Link>
    </Button>
  );
};

export default LinkCard;
