'use client';

import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { MenuItemCard } from '@/components/menu/menu-item-card';
import { menuData } from '@/lib/menu-data';

type Category = 'Appetizer' | 'Main Course' | 'Dessert' | 'Beverage';
const categories: Category[] = ['Appetizer', 'Main Course', 'Dessert', 'Beverage'];

type FilterTags = 'vegetarian' | 'spicy' | 'gluten-free';

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState<Set<FilterTags>>(new Set());

  const handleFilterChange = (tag: FilterTags) => {
    setActiveFilters((prev) => {
      const newFilters = new Set(prev);
      if (newFilters.has(tag)) {
        newFilters.delete(tag);
      } else {
        newFilters.add(tag);
      }
      return newFilters;
    });
  };

  const filteredMenu = useMemo(() => {
    return menuData.filter((item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilters =
        activeFilters.size === 0 ||
        Array.from(activeFilters).every((filter) => item.tags.includes(filter));
      return matchesSearch && matchesFilters;
    });
  }, [searchTerm, activeFilters]);

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Search for a dish..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-base"
          />
        </div>
        <div className="flex items-center gap-4 md:gap-6 flex-wrap">
          {(['vegetarian', 'spicy', 'gluten-free'] as FilterTags[]).map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={tag}
                checked={activeFilters.has(tag)}
                onCheckedChange={() => handleFilterChange(tag)}
              />
              <Label htmlFor={tag} className="text-sm font-medium capitalize">
                {tag.replace('-', ' ')}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="Appetizer" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
            {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
        </TabsList>
        {categories.map(category => {
            const items = filteredMenu.filter(item => item.category === category);
            return (
                <TabsContent key={category} value={category}>
                  {items.length > 0 ? (
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                      {items.map(item => (
                          <MenuItemCard key={item.id} item={item} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 text-muted-foreground">
                        <p>No dishes match your current filters in this category.</p>
                    </div>
                  )}
                </TabsContent>
            )
        })}
      </Tabs>
    </div>
  );
}
