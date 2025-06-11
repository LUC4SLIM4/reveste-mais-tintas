"use client"

import { useState } from "react"
import emailjs from "@emailjs/browser"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const { name, email, phone, subject, message } = formData

    if (!name.trim()) {
      setStatus({ type: "error", message: "Nome é obrigatório." })
      return false
    }

    if (!email.trim()) {
      setStatus({ type: "error", message: "Email é obrigatório." })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus({ type: "error", message: "Por favor, insira um email válido." })
      return false
    }

    if (!subject.trim()) {
      setStatus({ type: "error", message: "Assunto é obrigatório." })
      return false
    }

    if (!phone.trim()) {
      setStatus({ type: "error", message: "Telefone é obrigatório." })
      return false
    }

    if (!message.trim()) {
      setStatus({ type: "error", message: "Mensagem é obrigatória." })
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setStatus({ type: "", message: "" })

    try {
      // Configurações do EmailJS - SUBSTITUA pelos seus valores reais
      const serviceId = "service_stoepxw" // Seu Service ID
      const templateId = "template_wirx0nl" // Seu Template ID
      const publicKey = "3OqDlkKNQ6tVAAHkA" // Sua Public Key

      // Obter data e hora atual formatada
      const now = new Date()
      const timeFormatted = now.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo",
      })

      // Parâmetros que serão enviados para o template
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        time: timeFormatted,
        to_email: "revestemaispatos@gmail.com",
        reply_to: formData.email.trim(),
      }

      // Enviar email usando EmailJS
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (response.status === 200) {
        setStatus({
          type: "success",
          message: "✅ Mensagem enviada com sucesso! Entraremos em contato em breve.",
        })

        // Limpar formulário após envio bem-sucedido
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })

        // Limpar mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setStatus({ type: "", message: "" })
        }, 5000)
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error)

      let errorMessage = "❌ Erro ao enviar mensagem. Tente novamente."

      if (error.status === 400) {
        errorMessage = "❌ Dados inválidos. Verifique as informações e tente novamente."
      } else if (error.status === 401) {
        errorMessage = "❌ Erro de autenticação. Entre em contato por telefone."
      } else if (error.status === 402) {
        errorMessage = "❌ Limite de envios atingido. Entre em contato por telefone."
      }

      setStatus({
        type: "error",
        message: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Entre em Contato</h1>
          <p>
            Estamos prontos para atender você. Entre em contato conosco e descubra como podemos ajudar com suas
            necessidades de revestimentos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Contact Cards */}
          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Endereço</h3>
              <p>Av. Deputado Binga, 682</p>
              <p>Bairro Nossa Senhora de Fátima</p>
              <p>Patos de Minas/MG, 38701-682</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-phone"></i>
              </div>
              <h3>Telefone</h3>
              <p>(34) 3822-4410</p>
              <p>(34) 9888-4410</p>
              <p>WhatsApp disponível</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>revestemaispatos@gmail.com</p>
              <p>revestemais@outlook.com</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <h3>Horário de Funcionamento</h3>
              <p>Segunda à Quinta: 07:00 às 17:00</p>
              <p>Sexta: 07:00 às 16:00</p>
              <p>Sábado e Domingo: Fechado</p>
            </div>
          </div>

          {/* Form and Map Section */}
          <div className={styles.formMapSection}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h2>Envie uma Mensagem</h2>
                <p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`${styles.statusMessage} ${styles[status.type]}`}>{status.message}</div>
              )}

              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nome Completo *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      maxLength={100}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Telefone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      maxLength={20}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Seu Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    maxLength={100}
                  />
                </div>

                <div className={styles.formGroup}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Assunto *"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    maxLength={150}
                  />
                </div>

                <div className={styles.formGroup}>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Descreva como podemos ajudá-lo... *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    maxLength={1000}
                    rows={5}
                  ></textarea>
                  <small className={styles.charCounter}>{formData.message.length}/1000 caracteres</small>
                </div>

                <button type="submit" className={styles.submitButton} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Container */}
            <div className={styles.mapContainer}>
              <div className={styles.mapHeader}>
                <h2>Nossa Localização</h2>
                <p>Visite nossa loja física e conheça nossos produtos de perto.</p>
              </div>

              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.315982733785!2d-46.533836224105656!3d-18.559787797108964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94aef4bc0161824f%3A0xb8c2fa81a685b686!2sReveste%20Mais%20Tintas!5e0!3m2!1spt-BR!2sbr!4v1749642406288!5m2!1spt-BR!2sbr"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <div className={styles.socialSection}>
                <h3>Siga-nos nas Redes Sociais</h3>
                <div className={styles.socialLinks}>
                  <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
