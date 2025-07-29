import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Bell, 
  Palette, 
  Download, 
  Trash2, 
  Save
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import styles from './AccountSettings.module.css';

const AccountSettings: React.FC = () => {
  const { currentUser } = useAuth();
  const [settings, setSettings] = useState({
    notifications: {
      daily_reminders: true,
      meditation_streaks: true,
      weekly_progress: false,
      email_updates: true,
    },
    privacy: {
      profile_visibility: 'friends',
      activity_sharing: false,
      data_analytics: true,
    },
    preferences: {
      theme: 'light',
      language: 'pt-BR',
      meditation_duration: 10,
      reminder_time: '09:00',
    }
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSettingChange = (category: string, setting: string, value: boolean | string | number) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSaveSettings = () => {
    // Implementar salvamento das configurações
    console.log('Configurações salvas:', settings);
  };

  const handleDeleteAccount = () => {
    // Implementar exclusão da conta
    console.log('Conta excluída');
    setShowDeleteConfirm(false);
  };

  const handleExportData = () => {
    // Implementar exportação de dados
    console.log('Dados exportados');
  };

  return (
    <motion.div
      className={styles.accountSettings}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.settingsContainer}>
        
        {/* Seção de Notificações */}
        <div className={styles.settingSection}>
          <div className={styles.sectionHeader}>
            <Bell className={styles.sectionIcon} />
            <h3>Notificações</h3>
          </div>
          
          <div className={styles.settingItems}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Lembretes Diários</label>
                <span>Receba lembretes para suas práticas diárias</span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.notifications.daily_reminders}
                  onChange={(e) => handleSettingChange('notifications', 'daily_reminders', e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Sequências de Meditação</label>
                <span>Notificações sobre sequências e conquistas</span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.notifications.meditation_streaks}
                  onChange={(e) => handleSettingChange('notifications', 'meditation_streaks', e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Relatório Semanal</label>
                <span>Receba um resumo semanal do seu progresso</span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.notifications.weekly_progress}
                  onChange={(e) => handleSettingChange('notifications', 'weekly_progress', e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Horário de Lembrete</label>
                <span>Defina o melhor horário para seus lembretes</span>
              </div>
              <input
                type="time"
                value={settings.preferences.reminder_time}
                onChange={(e) => handleSettingChange('preferences', 'reminder_time', e.target.value)}
                className={styles.timeInput}
              />
            </div>
          </div>
        </div>

        {/* Seção de Privacidade */}
        <div className={styles.settingSection}>
          <div className={styles.sectionHeader}>
            <Shield className={styles.sectionIcon} />
            <h3>Privacidade e Segurança</h3>
          </div>
          
          <div className={styles.settingItems}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Visibilidade do Perfil</label>
                <span>Quem pode ver seu perfil e atividades</span>
              </div>
              <select
                value={settings.privacy.profile_visibility}
                onChange={(e) => handleSettingChange('privacy', 'profile_visibility', e.target.value)}
                className={styles.selectInput}
              >
                <option value="public">Público</option>
                <option value="friends">Apenas Amigos</option>
                <option value="private">Privado</option>
              </select>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Compartilhar Atividades</label>
                <span>Permitir que outros vejam suas atividades</span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.privacy.activity_sharing}
                  onChange={(e) => handleSettingChange('privacy', 'activity_sharing', e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Análise de Dados</label>
                <span>Permitir coleta de dados para melhorar a experiência</span>
              </div>
              <label className={styles.toggle}>
                <input
                  type="checkbox"
                  checked={settings.privacy.data_analytics}
                  onChange={(e) => handleSettingChange('privacy', 'data_analytics', e.target.checked)}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>

        {/* Seção de Preferências */}
        <div className={styles.settingSection}>
          <div className={styles.sectionHeader}>
            <Palette className={styles.sectionIcon} />
            <h3>Preferências</h3>
          </div>
          
          <div className={styles.settingItems}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Tema</label>
                <span>Escolha entre tema claro ou escuro</span>
              </div>
              <select
                value={settings.preferences.theme}
                onChange={(e) => handleSettingChange('preferences', 'theme', e.target.value)}
                className={styles.selectInput}
              >
                <option value="light">Claro</option>
                <option value="dark">Escuro</option>
                <option value="auto">Automático</option>
              </select>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Idioma</label>
                <span>Selecione seu idioma preferido</span>
              </div>
              <select
                value={settings.preferences.language}
                onChange={(e) => handleSettingChange('preferences', 'language', e.target.value)}
                className={styles.selectInput}
              >
                <option value="pt-BR">Português (Brasil)</option>
                <option value="en-US">English (US)</option>
                <option value="es-ES">Español</option>
              </select>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Duração Padrão da Meditação</label>
                <span>Tempo padrão para sessões de meditação</span>
              </div>
              <select
                value={settings.preferences.meditation_duration}
                onChange={(e) => handleSettingChange('preferences', 'meditation_duration', parseInt(e.target.value))}
                className={styles.selectInput}
              >
                <option value={5}>5 minutos</option>
                <option value={10}>10 minutos</option>
                <option value={15}>15 minutos</option>
                <option value={20}>20 minutos</option>
                <option value={30}>30 minutos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Seção de Dados da Conta */}
        <div className={styles.settingSection}>
          <div className={styles.sectionHeader}>
            <Download className={styles.sectionIcon} />
            <h3>Dados da Conta</h3>
          </div>
          
          <div className={styles.settingItems}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Exportar Dados</label>
                <span>Baixe uma cópia de todos os seus dados</span>
              </div>
              <button onClick={handleExportData} className={styles.actionButton}>
                <Download size={16} />
                Exportar
              </button>
            </div>

            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Email da Conta</label>
                <span>{currentUser?.email}</span>
              </div>
              <span className={styles.verifiedBadge}>Verificado</span>
            </div>
          </div>
        </div>

        {/* Seção de Zona de Perigo */}
        <div className={`${styles.settingSection} ${styles.dangerZone}`}>
          <div className={styles.sectionHeader}>
            <Trash2 className={styles.sectionIcon} />
            <h3>Zona de Perigo</h3>
          </div>
          
          <div className={styles.settingItems}>
            <div className={styles.settingItem}>
              <div className={styles.settingInfo}>
                <label>Excluir Conta</label>
                <span>Exclua permanentemente sua conta e todos os dados</span>
              </div>
              <button 
                onClick={() => setShowDeleteConfirm(true)}
                className={styles.dangerButton}
              >
                <Trash2 size={16} />
                Excluir Conta
              </button>
            </div>
          </div>
        </div>

        {/* Botão de Salvar */}
        <div className={styles.saveSection}>
          <button onClick={handleSaveSettings} className={styles.saveButton}>
            <Save size={20} />
            Salvar Configurações
          </button>
        </div>

        {/* Modal de Confirmação de Exclusão */}
        {showDeleteConfirm && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <h3>Confirmar Exclusão da Conta</h3>
              <p>
                Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita 
                e todos os seus dados serão permanentemente removidos.
              </p>
              <div className={styles.modalActions}>
                <button 
                  onClick={() => setShowDeleteConfirm(false)}
                  className={styles.cancelButton}
                >
                  Cancelar
                </button>
                <button 
                  onClick={handleDeleteAccount}
                  className={styles.confirmDeleteButton}
                >
                  Sim, Excluir Conta
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AccountSettings;
