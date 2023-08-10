import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NewGame.css'
import { AiOutlineHome, AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'

function NewGame() {
  const maxPlayers = 8; // Le nombre maximum de joueurs
  const [players, setPlayers] = useState(['Joueur 1']) // Un tableau pour stocker les noms des joueurs
  const [editingIndex, setEditingIndex] = useState(-1); // L'index du joueur en cours d'édition
  const [editedName, setEditedName] = useState(''); // Le nom en cours de modification

  const addPlayer = () => {
    // Vérifier si le nombre de joueurs n'a pas atteint la limite
    if (players.length < maxPlayers) {
      // Ajouter un nouveau joueur (avec un nom générique par défaut)
      const newPlayerName = `Joueur ${players.length + 1}`
      setPlayers([...players, newPlayerName])
    } else {
      // Afficher un message d'erreur si la limite est atteinte
      alert('Nombre maximum de joueurs atteint (8)')
    }
  }

  const handleEditClick = (index) => {
    // Activer la modification du nom pour le joueur sélectionné
    setEditingIndex(index);
    setEditedName(players[index]); // Pré-remplir le champ d'édition avec le nom actuel
  }

  const handleSaveClick = (index, newName) => {
    // Enregistrer le nouveau nom du joueur
    const updatedPlayers = [...players];
    updatedPlayers[index] = newName;
    setPlayers(updatedPlayers);
    setEditingIndex(-1); // Désactiver la modification
  }

  const handleDeleteClick = (index) => {
    // Supprimer le joueur
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  }

  return (
    <div className='main-container'>
      <h1>Configuration de la partie</h1>

      {/* Afficher la liste des joueurs */}
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {editingIndex === index ? (
              // Si le joueur est en cours d'édition, afficher le champ input, le bouton de validation et le bouton de suppression
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <button className='button-edit' onClick={() => handleSaveClick(index, editedName)}>Valider</button>
              </>
            ) : (
              // Sinon, afficher le nom du joueur, le bouton pour activer l'édition et le bouton de suppression
              <>
                {player}
                <button className='button-edit' onClick={() => handleEditClick(index)}><AiFillEdit /></button>
                <button className='button-delete' onClick={() => handleDeleteClick(index)}><AiFillDelete /></button>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Bouton pour ajouter un joueur */}
      <button className="button" onClick={addPlayer}>Ajouter un joueur</button>

      <div className='navigation'>
        {/* Lien pour revenir à la page d'accueil */}
        <button className='button home'><Link to='/'><AiOutlineHome/></Link></button>

        {/* Bouton pour démarrer la partie */}
        <button className='button start'><BsFillPlayFill /></button>
      </div>
    </div>
  )
}

export default NewGame
