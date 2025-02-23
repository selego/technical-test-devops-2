# **Test Technique - DevOps**

### **Objectif**

**Configurer l'infrastructure pour le déploiement d’une API déjà en place**

### **Étape 1: Configuration de l'Infrastructure**

- Mettez en place l'infrastructure nécessaire pour le déploiement. Vous pouvez utiliser des services cloud gratuits de votre choix. DOCKER est obligatoire pour cette étape.

**Note:** Veuillez héberger le serveur à une URL accessible et nous fournir l'URL pour accéder à celui-ci.

### **Étape 2: Pipeline CI/CD avec GitHub Actions**

- Configurez un pipeline de déploiement continu (CI/CD) en utilisant GitHub Actions.
- Automatisez les étapes suivantes dans le pipeline :
  - Installation des dépendances Node.js.
  - Déploiement sur le serveur de développement après chaque modification du code source.
  - Faire en sorte que l’application redémarre automatiquement en cas de problème
  - S'assurer que l'application est accessible et répond aux requêtes une fois déployée. Cela pourrait être un simple test de ping ou une vérification que l'URL principale renvoie un code de statut 200.

### **Étape 3: Gestion des Secrets et de la Sécurité**

- Gérez les secrets de l'application en utilisant des variables d'environnement pour stocker les informations sensibles de manière sécurisée.
- Protégez l'accès à la route `/secret`.
- **[Live Coding/Questions]** Discutez et mettez en œuvre des mesures de sécurité avancées pour la route /secret.

### **Étape 4: Tests Unitaires pour le Déploiement**

- Écrivez des tests unitaires pour valider le bon fonctionnement de l'application avant son déploiement et intégrez ces tests dans le pipeline CI/CD.

# ETAPES BONUS EN LIVE CODING

### **Gestion des Erreurs**

- Configurez la gestion des erreurs en utilisant Sentry pour capturer et gérer les erreurs de l'application.

**Note:** Veuillez nous fournir les identifiants pour accéder à Sentry.

### **Gestion des logs et surveillance**

- Trouvez un moyen de monitoring et de visualisation des métriques. Le but étant de pouvoir facilement repérer qui s’est connecté suite à une intrusion par exemple.
- **[Discussion]** Parlez de vos stratégies pour la surveillance et la mise à l'échelle automatique.

### **Mise à l’échelle automatique**

- Mettez en place une mise à l'échelle automatique de l'application Node.js en fonction de la charge. Vous pouvez utiliser Docker ou non. Un test de charge sera lancé pour vérifier le déclenchement de l’autoscaling.

### PS :

L’usage de méthodes de génération de code automatique est autorisé voire même fortement recommandée afin de gagner du temps.
Assurez-vous d'ajouter **@naustra** en tant qu'admin sur le dépôt GitHub associé et également de nous informer de l'endroit où l'infrastructure est hébergée.
