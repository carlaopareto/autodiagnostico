import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Question } from '@/types/assessment';

interface QuestionCardProps {
  question: Question;
  value?: string;
  onValueChange: (value: string) => void;
  questionNumber: number;
}

export const QuestionCard = ({ question, value, onValueChange, questionNumber }: QuestionCardProps) => {
  return (
    <Card className="mb-6 shadow-[var(--shadow-card)] border-border/50 hover:shadow-[var(--shadow-elegant)] transition-[var(--transition-smooth)]">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-3">
          <Badge variant="secondary" className="shrink-0 font-semibold">
            {questionNumber}
          </Badge>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground font-medium">
              {question.dimension} → {question.category}
            </div>
            <CardTitle className="text-base leading-relaxed">
              {question.text}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <RadioGroup value={value} onValueChange={onValueChange} className="space-y-3">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-[var(--transition-smooth)] group">
              <RadioGroupItem value={option.value.toString()} id={`${question.id}-${index}`} className="mt-1 shrink-0" />
              <Label 
                htmlFor={`${question.id}-${index}`}
                className="text-sm leading-relaxed cursor-pointer group-hover:text-foreground transition-[var(--transition-smooth)]"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};