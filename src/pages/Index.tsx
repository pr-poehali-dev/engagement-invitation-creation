import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('yes');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      toast({
        title: 'Спасибо за ответ!',
        description: attendance === 'yes' 
          ? 'Мы рады, что вы будете с нами!' 
          : 'Жаль, что вы не сможете присутствовать.',
      });
      setName('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F7F4] via-[#FDFCFA] to-[#F5F3EF] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2C2C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-8">
              <Icon name="Heart" size={40} className="mx-auto text-[#C9A961] mb-6" />
            </div>
            
            <h1 
              className="text-6xl md:text-8xl font-light mb-4 tracking-wide text-[#2C2C2C]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Robert
            </h1>
            
            <div className="flex items-center justify-center gap-4 my-6">
              <Separator className="w-16 bg-[#C9A961]" />
              <span className="text-2xl text-[#C9A961]">&</span>
              <Separator className="w-16 bg-[#C9A961]" />
            </div>
            
            <h1 
              className="text-6xl md:text-8xl font-light mb-12 tracking-wide text-[#2C2C2C]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Kristina
            </h1>

            <p 
              className="text-lg md:text-xl text-[#666666] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              Приглашаем на обручение
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-[#C9A961]/20 rounded-lg p-8 md:p-12 shadow-xl mb-12 animate-scale-in">
            <div className="space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Icon name="Calendar" size={24} className="text-[#C9A961]" />
                  <p 
                    className="text-5xl md:text-6xl font-light text-[#2C2C2C]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    24 | 01 | 2026
                  </p>
                </div>
              </div>

              <Separator className="bg-[#C9A961]/30" />

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Icon name="Clock" size={20} className="text-[#C9A961]" />
                  <p 
                    className="text-xl md:text-2xl text-[#666666]"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  >
                    18:00
                  </p>
                </div>
              </div>

              <Separator className="bg-[#C9A961]/30" />

              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Icon name="MapPin" size={20} className="text-[#C9A961]" />
                  <p 
                    className="text-xl md:text-2xl font-medium text-[#2C2C2C]"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Кафе «Три берёзки»
                  </p>
                </div>
                <p 
                  className="text-base md:text-lg text-[#666666]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
                >
                  с. Усатово, ул. Маяковского, 2е
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-[#C9A961]/20 rounded-lg p-8 md:p-12 shadow-xl animate-scale-in">
            <h2 
              className="text-3xl md:text-4xl font-light text-center mb-8 text-[#2C2C2C]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Подтверждение присутствия
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label 
                  htmlFor="name" 
                  className="text-base mb-2 text-[#2C2C2C]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Ваше имя
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Введите ваше имя"
                  className="border-[#C9A961]/30 focus:border-[#C9A961] text-base"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  required
                />
              </div>

              <div>
                <Label 
                  className="text-base mb-3 block text-[#2C2C2C]"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                >
                  Планируете присутствовать?
                </Label>
                <RadioGroup value={attendance} onValueChange={setAttendance}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label 
                      htmlFor="yes" 
                      className="text-base cursor-pointer text-[#2C2C2C]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                    >
                      Да, буду
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label 
                      htmlFor="no" 
                      className="text-base cursor-pointer text-[#2C2C2C]"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                    >
                      К сожалению, не смогу
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#C9A961] hover:bg-[#B89851] text-white py-6 text-lg transition-all duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
              >
                Отправить ответ
              </Button>
            </form>
          </div>

          <div className="text-center mt-12">
            <p 
              className="text-sm text-[#999999] tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
            >
              С любовью, Robert & Kristina
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;