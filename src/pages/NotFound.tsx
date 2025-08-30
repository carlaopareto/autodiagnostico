import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--gradient-subtle)] p-4">
      <Card className="max-w-md w-full shadow-[var(--shadow-card)] border-border/50">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-destructive/10 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold mb-4">404</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ops! Página não encontrada
          </p>
          <Button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-[var(--gradient-primary)] hover:opacity-90 transition-[var(--transition-smooth)]"
          >
            <Home className="w-4 h-4" />
            Voltar ao Início
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
