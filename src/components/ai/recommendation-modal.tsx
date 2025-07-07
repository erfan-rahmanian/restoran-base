'use client';

import { useEffect, useState } from 'react';
import { getRecipeRecommendation } from '@/ai/flows/recipe-recommendation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/app-context';
import { Lightbulb, ShoppingCart, Zap } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

interface RecommendationModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  orderSummary: string;
}

export function RecommendationModal({
  isOpen,
  onOpenChange,
  orderSummary,
}: RecommendationModalProps) {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useCart();

  useEffect(() => {
    if (isOpen && orderSummary && recommendations.length === 0) {
      const fetchRecommendations = async () => {
        setIsLoading(true);
        try {
          const result = await getRecipeRecommendation({ orderSummary });
          setRecommendations(result.recommendations);
        } catch (error) {
          console.error('Failed to get recommendations:', error);
          toast({
            title: 'Error',
            description: 'Could not fetch recommendations.',
            variant: 'destructive',
          });
        } finally {
          setIsLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [isOpen, orderSummary, recommendations.length, toast]);

  const handleClose = () => {
    onOpenChange(false);
    setRecommendations([]); // Reset for next time
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-center font-headline text-2xl">Don't Forget These!</DialogTitle>
          <DialogDescription className="text-center">
            Our AI chef thinks you'll love these additions to your order.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : (
            <ul className="space-y-3">
              {recommendations.map((rec, index) => (
                <li key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                  <span className="font-semibold">{rec.replace(/^\d+\.\s*/, '')}</span>
                  <Button size="sm" variant="outline" onClick={() => toast({ title: "Coming Soon!", description: "This feature is under development."})}>
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <DialogFooter>
          <Button type="button" variant="ghost" onClick={handleClose}>
            No, thanks
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
