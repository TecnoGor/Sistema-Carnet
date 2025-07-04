PGDMP  (                    }            sicven    16.4    16.4 1    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    57358    sicven    DATABASE     y   CREATE DATABASE sicven WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Spain.1252';
    DROP DATABASE sicven;
                postgres    false            �            1259    73749    gerencia_color    TABLE     �   CREATE TABLE public.gerencia_color (
    id integer NOT NULL,
    codger character varying(100),
    color character varying(50)
);
 "   DROP TABLE public.gerencia_color;
       public         heap    postgres    false            �            1259    73748    gerencia_color_id_seq    SEQUENCE     �   CREATE SEQUENCE public.gerencia_color_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.gerencia_color_id_seq;
       public          postgres    false    227            �           0    0    gerencia_color_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.gerencia_color_id_seq OWNED BY public.gerencia_color.id;
          public          postgres    false    226            �            1259    65550 	   invitados    TABLE     i  CREATE TABLE public.invitados (
    id integer NOT NULL,
    firstnameinv character varying(100) NOT NULL,
    secondnameinv character varying(100) NOT NULL,
    cedinv integer NOT NULL,
    dir text,
    mail character varying(80) NOT NULL,
    tel character varying(50) NOT NULL,
    origin character varying(100) NOT NULL,
    foto character varying(100)
);
    DROP TABLE public.invitados;
       public         heap    postgres    false            �            1259    65555    invitados_id_seq    SEQUENCE     �   CREATE SEQUENCE public.invitados_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.invitados_id_seq;
       public          postgres    false    215            �           0    0    invitados_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.invitados_id_seq OWNED BY public.invitados.id;
          public          postgres    false    216            �            1259    65556    modules    TABLE     h   CREATE TABLE public.modules (
    id integer NOT NULL,
    namemodule character varying(50) NOT NULL
);
    DROP TABLE public.modules;
       public         heap    postgres    false            �            1259    65559    modules_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.modules_id_seq;
       public          postgres    false    217            �           0    0    modules_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.modules_id_seq OWNED BY public.modules.id;
          public          postgres    false    218            �            1259    65560    personal    TABLE     t   CREATE TABLE public.personal (
    id integer NOT NULL,
    codpersonal integer NOT NULL,
    foto text NOT NULL
);
    DROP TABLE public.personal;
       public         heap    postgres    false            �            1259    65565    personal_id_seq    SEQUENCE     �   CREATE SEQUENCE public.personal_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.personal_id_seq;
       public          postgres    false    219            �           0    0    personal_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.personal_id_seq OWNED BY public.personal.id;
          public          postgres    false    220            �            1259    65566    roles    TABLE     �   CREATE TABLE public.roles (
    id integer NOT NULL,
    namerole character varying(50) NOT NULL,
    asocmodules character varying(100) NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    65569    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    221            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    222            �            1259    73743    srh_gerencia    TABLE     �   CREATE TABLE public.srh_gerencia (
    codemp character(4) NOT NULL,
    codger character(10) NOT NULL,
    denger character(254)
);
     DROP TABLE public.srh_gerencia;
       public         heap    postgres    false            �            1259    65570    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(100) NOT NULL,
    secondname character varying(100) NOT NULL,
    ci integer NOT NULL,
    mail character varying(100) NOT NULL,
    phone character varying(30),
    username character varying(35) NOT NULL,
    password character varying(257) NOT NULL,
    status boolean NOT NULL,
    rol integer NOT NULL,
    datesign timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    lastlog date
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    65576    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    223            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    224            -           2604    73752    gerencia_color id    DEFAULT     v   ALTER TABLE ONLY public.gerencia_color ALTER COLUMN id SET DEFAULT nextval('public.gerencia_color_id_seq'::regclass);
 @   ALTER TABLE public.gerencia_color ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    227    227            '           2604    65577    invitados id    DEFAULT     l   ALTER TABLE ONLY public.invitados ALTER COLUMN id SET DEFAULT nextval('public.invitados_id_seq'::regclass);
 ;   ALTER TABLE public.invitados ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            (           2604    65578 
   modules id    DEFAULT     h   ALTER TABLE ONLY public.modules ALTER COLUMN id SET DEFAULT nextval('public.modules_id_seq'::regclass);
 9   ALTER TABLE public.modules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            )           2604    65579    personal id    DEFAULT     j   ALTER TABLE ONLY public.personal ALTER COLUMN id SET DEFAULT nextval('public.personal_id_seq'::regclass);
 :   ALTER TABLE public.personal ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219            *           2604    65580    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221            +           2604    65581    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223            �          0    73749    gerencia_color 
   TABLE DATA           ;   COPY public.gerencia_color (id, codger, color) FROM stdin;
    public          postgres    false    227   �4       �          0    65550 	   invitados 
   TABLE DATA           j   COPY public.invitados (id, firstnameinv, secondnameinv, cedinv, dir, mail, tel, origin, foto) FROM stdin;
    public          postgres    false    215   J5       �          0    65556    modules 
   TABLE DATA           1   COPY public.modules (id, namemodule) FROM stdin;
    public          postgres    false    217   g5       �          0    65560    personal 
   TABLE DATA           9   COPY public.personal (id, codpersonal, foto) FROM stdin;
    public          postgres    false    219   �5       �          0    65566    roles 
   TABLE DATA           :   COPY public.roles (id, namerole, asocmodules) FROM stdin;
    public          postgres    false    221   �5       �          0    73743    srh_gerencia 
   TABLE DATA           >   COPY public.srh_gerencia (codemp, codger, denger) FROM stdin;
    public          postgres    false    225   �5       �          0    65570    users 
   TABLE DATA              COPY public.users (id, firstname, secondname, ci, mail, phone, username, password, status, rol, datesign, lastlog) FROM stdin;
    public          postgres    false    223   �;       �           0    0    gerencia_color_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.gerencia_color_id_seq', 18, true);
          public          postgres    false    226            �           0    0    invitados_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.invitados_id_seq', 1, false);
          public          postgres    false    216            �           0    0    modules_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.modules_id_seq', 1, false);
          public          postgres    false    218            �           0    0    personal_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.personal_id_seq', 1, false);
          public          postgres    false    220            �           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 4, true);
          public          postgres    false    222            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    224            ;           2606    73754 "   gerencia_color gerencia_color_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.gerencia_color
    ADD CONSTRAINT gerencia_color_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.gerencia_color DROP CONSTRAINT gerencia_color_pkey;
       public            postgres    false    227            /           2606    65583    invitados invitados_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.invitados
    ADD CONSTRAINT invitados_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.invitados DROP CONSTRAINT invitados_pkey;
       public            postgres    false    215            1           2606    65585    modules modules_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.modules DROP CONSTRAINT modules_pkey;
       public            postgres    false    217            3           2606    65587    personal personal_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.personal
    ADD CONSTRAINT personal_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.personal DROP CONSTRAINT personal_pkey;
       public            postgres    false    219            9           2606    73747    srh_gerencia pk_srh_gerencia 
   CONSTRAINT     f   ALTER TABLE ONLY public.srh_gerencia
    ADD CONSTRAINT pk_srh_gerencia PRIMARY KEY (codemp, codger);
 F   ALTER TABLE ONLY public.srh_gerencia DROP CONSTRAINT pk_srh_gerencia;
       public            postgres    false    225    225            5           2606    65589    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    221            7           2606    65591    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    223            �   �   x�=�;1Cks�U�B�d>����c�bG~�� ��GRQ��x�"Zm��{�=���8:�G20�~Z�L 2S�y�L��g������
!�h)��)�H��ӄ����BC������ι��BG��l[Nɿ�������>(�      �      x������ � �      �      x������ � �      �      x������ � �      �   A   x�3�.-H-rL������2��2�K�S�"Ɯ�y�9@�D Ǆ3(59� 93?*���� ��J      �   �  x��Kn�8���)t�������)Za@�̅��f��)�JW���b�u�`>PU���r�Z�1i᤮a��U��a�p,oZ-ji������4KOLU���I���^��	�X���h�76n��`����7���G�,�r "�V��cq��C��Q�1�l�^�	�x�8�|��խ��y˼<��R��f1�Kl� Oyܴ���K8�B8���:ƍ1���q�㨅���1�V�q�.�c���x-��f�;�<Ӊ1�±�8�>Y���}�)�8a�2��ET:2R���'��B8�-���4����.D@D�l��'��hӇ��/�m�_���I�@�ԉ&XY��xB��pL���w����2M,Z�J���ؖ�p��FA@�/Uŕ-��(�}A8��986�F �V/Ɖ�e��?3�0/Jı^~�H����r���r�p� ���K'S^�f#���W(���P�5�љ��X�)7�N\�&�#f��{��)n,�c�5+���:I4� ;�#F?<)�� �p<"A�@;rlV���o��>VUp!:���G)b5♭�)�y|�� p�"��tL�ıY"ڳ�T}�R����R0M�>��)e!�{F��8����dq��VĴb�^����"�;��J����)�>t-ӯ���mi-��uQ�o&'���&�p@[Z�&k�����B8�-�߰�T��TO�����{6����V�R�_Ě��8�Ж
ǃP���7��T
�#+�ç��1���f��}�I�X嫂Ɛ���xQ�〾��BO����S�-��x�<J���ှT�]|�%�Q��x$���=���L�2���.�r�8 �=�ۄ�tpKV���hIoִ��p@[�2텖c�F�b��:c��{��$�c��q�t���ͧ8���p@[�M�w̽ğ�]�9��k�.����%?�x@[:�p~?ံ�cE���hK�~	B8�-������g�8��ob�a��@T��i���@G6�"�/p���:��2±��1��3aM*VB?�NW��iN�!�Г��'8�u8��^a6�#�1\�����|��q1��)��Ŋ���N-�`!��q��Pi������*�q���ǰ~Q��	�Rg�^�x�O����x@czN�N.:R������Suk`��0�\����n!�<�.X��s(�c��aY�%���]�Ѩ7���x���q{ͱ�Ԃp<�q���5F_�>���/�_�p�8���(І�Y�1�R��Xeq�"5>�^�O�Ȼ��hFr��NGޕ� �i��c���$Gޕ�}�&G�Eu�#�J]�E�,��+��?�"�w�ކ�.��w���;x�̽�w�������ҘUY��-�5�p W:��T�nK	O�p�����5���$O��3^�qw0M��A8���a��.��������wÊ�      �   �   x�%�1�0@��9he;��tb`b�],'�h�pQ��K�<����C$-�X�ھ���������$����J�}HwkѹZ4�ʊ]T|�Ǒ[6#�#�W��\��.����F��P�kV��+�s�[ (S     