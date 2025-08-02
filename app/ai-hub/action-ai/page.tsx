import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, CheckSquare, Target, Clock } from "lucide-react"
import ActionPlanForm from "@/components/action-plan-form"
import { useTranslation } from "react-i18next"

export default function ActionAIPage() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">{t('aiHub.actionAI')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('actionAI.description')}
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-black">{t('actionAI.targetedProspecting')}</CardTitle>
              <CardDescription>{t('actionAI.targetedProspectingDesc')}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <CheckSquare className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <CardTitle className="text-black">{t('actionAI.readyScripts')}</CardTitle>
              <CardDescription>{t('actionAI.readyScriptsDesc')}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center border-0 shadow-lg">
            <CardHeader>
              <Clock className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle className="text-black">{t('actionAI.dailyPlans')}</CardTitle>
              <CardDescription>{t('actionAI.dailyPlansDesc')}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Tool Interface */}
        <Card className="max-w-4xl mx-auto border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-black text-center">{t('actionAI.generatorTitle')}</CardTitle>
            <CardDescription className="text-center">
              {t('actionAI.generatorDesc')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ActionPlanForm />
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-8">{t('actionAI.whyUseTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  {t('actionAI.saveTime')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('actionAI.saveTimeDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  {t('actionAI.increaseEffectiveness')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('actionAI.increaseEffectivenessDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  {t('actionAI.stayFocused')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('actionAI.stayFocusedDesc')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  {t('actionAI.trackProgress')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {t('actionAI.trackProgressDesc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works Section */}
        <Card className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-black text-center">💡 {t('actionAI.howItWorks')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">{t('actionAI.step1Title')}</h4>
                  <p className="text-gray-600">
                    {t('actionAI.step1Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">{t('actionAI.step2Title')}</h4>
                  <p className="text-gray-600">
                    {t('actionAI.step2Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">{t('actionAI.step3Title')}</h4>
                  <p className="text-gray-600">
                    {t('actionAI.step3Desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">{t('actionAI.step4Title')}</h4>
                  <p className="text-gray-600">
                    {t('actionAI.step4Desc')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
