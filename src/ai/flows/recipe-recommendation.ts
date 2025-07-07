// recipe-recommendation.ts
'use server';
/**
 * @fileOverview An AI agent that recommends additional dishes to the user based on their order.
 *
 * - getRecipeRecommendation - A function that handles the recipe recommendation process.
 * - RecipeRecommendationInput - The input type for the getRecipeRecommendation function.
 * - RecipeRecommendationOutput - The return type for the getRecipeRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeRecommendationInputSchema = z.object({
  orderSummary: z.string().describe('The summary of the order.'),
});
export type RecipeRecommendationInput = z.infer<typeof RecipeRecommendationInputSchema>;

const RecipeRecommendationOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('The recommended dishes based on the order summary.'),
});
export type RecipeRecommendationOutput = z.infer<typeof RecipeRecommendationOutputSchema>;

export async function getRecipeRecommendation(input: RecipeRecommendationInput): Promise<RecipeRecommendationOutput> {
  return recipeRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recipeRecommendationPrompt',
  input: {schema: RecipeRecommendationInputSchema},
  output: {schema: RecipeRecommendationOutputSchema},
  prompt: `You are a personal restaurant assistant. A user has just placed the following order: {{{orderSummary}}}. Based on this order, recommend three additional dishes from our menu that they might enjoy. Format as a numbered list of dish names.
`,
});

const recipeRecommendationFlow = ai.defineFlow(
  {
    name: 'recipeRecommendationFlow',
    inputSchema: RecipeRecommendationInputSchema,
    outputSchema: RecipeRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
