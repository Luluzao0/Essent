import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Edit3, Mail, Calendar, MapPin, Phone, Camera } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import styles from './ProfileView.module.css';

const ProfileView: React.FC = () => {
  const { currentUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    displayName: currentUser?.displayName || '',
    email: currentUser?.email || '',
    phone: '',
    location: '',
    bio: 'Praticante de meditação e bem-estar mental.',
    joinDate: new Date().toLocaleDateString('pt-BR'),
  });

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar os dados no Firebase
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <motion.div
      className={styles.profileView}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.profileCard}>
        {/* Header do Perfil */}
        <div className={styles.profileHeader}>
          <div className={styles.avatarSection}>
            <div className={styles.avatarContainer}>
              <img 
                src={currentUser?.photoURL || '/api/placeholder/120/120'} 
                alt={profileData.displayName}
                className={styles.profileAvatar}
              />
              <button className={styles.changePhotoBtn}>
                <Camera size={16} />
              </button>
            </div>
          </div>
          
          <div className={styles.profileInfo}>
            <div className={styles.nameSection}>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.displayName}
                  onChange={(e) => handleInputChange('displayName', e.target.value)}
                  className={styles.nameInput}
                />
              ) : (
                <h1 className={styles.profileName}>{profileData.displayName}</h1>
              )}
              
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={styles.editButton}
              >
                <Edit3 size={16} />
                {isEditing ? 'Cancelar' : 'Editar Perfil'}
              </button>
            </div>
            
            <p className={styles.memberSince}>
              Membro desde {profileData.joinDate}
            </p>
          </div>
        </div>

        {/* Informações do Perfil */}
        <div className={styles.profileDetails}>
          <div className={styles.detailsGrid}>
            {/* Email */}
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <Mail size={20} />
              </div>
              <div className={styles.detailContent}>
                <label>Email</label>
                <span>{profileData.email}</span>
              </div>
            </div>

            {/* Telefone */}
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <Phone size={20} />
              </div>
              <div className={styles.detailContent}>
                <label>Telefone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(00) 00000-0000"
                    className={styles.detailInput}
                  />
                ) : (
                  <span>{profileData.phone || 'Não informado'}</span>
                )}
              </div>
            </div>

            {/* Localização */}
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <MapPin size={20} />
              </div>
              <div className={styles.detailContent}>
                <label>Localização</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="Cidade, Estado"
                    className={styles.detailInput}
                  />
                ) : (
                  <span>{profileData.location || 'Não informado'}</span>
                )}
              </div>
            </div>

            {/* Data de Nascimento */}
            <div className={styles.detailItem}>
              <div className={styles.detailIcon}>
                <Calendar size={20} />
              </div>
              <div className={styles.detailContent}>
                <label>Data de Nascimento</label>
                {isEditing ? (
                  <input
                    type="date"
                    className={styles.detailInput}
                  />
                ) : (
                  <span>Não informado</span>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={styles.bioSection}>
            <label>Sobre mim</label>
            {isEditing ? (
              <textarea
                value={profileData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                className={styles.bioTextarea}
                rows={4}
              />
            ) : (
              <p className={styles.bioText}>{profileData.bio}</p>
            )}
          </div>

          {/* Botões de Ação */}
          {isEditing && (
            <div className={styles.actionButtons}>
              <button onClick={handleSave} className={styles.saveButton}>
                Salvar Alterações
              </button>
              <button 
                onClick={() => setIsEditing(false)} 
                className={styles.cancelButton}
              >
                Cancelar
              </button>
            </div>
          )}
        </div>

        {/* Estatísticas do Perfil */}
        <div className={styles.profileStats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24</span>
            <span className={styles.statLabel}>Dias ativos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>18</span>
            <span className={styles.statLabel}>Meditações</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>156</span>
            <span className={styles.statLabel}>Minutos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7</span>
            <span className={styles.statLabel}>Sequência</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileView;
